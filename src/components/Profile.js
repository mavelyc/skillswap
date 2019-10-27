import React from 'react';
import {
  withRouter,
} from "react-router-dom";
import './Profile.css';
import {Container, Row, Col, Image, Card, Button, Jumbotron, ListGroup} from 'react-bootstrap';
import pic from '../images/cmav.jpg'
import firebase from '../firebase';

class Profile extends React.Component {
    
  constructor() {
      super();
      this.state={
          name: '',
          bio: '',
          skills: [],
          isSelfProfile: false,
          profileEmail: '',
          current_user: null,
      }
  }

  componentDidMount() {
    // determine if profile is your own profile
    let self = this;
    let profileEmail = this.props.match.params.id;
    let current_user = firebase.auth().currentUser;
    let isSelfProfile = current_user && profileEmail == current_user.email;

    this.setState({
      isSelfProfile: isSelfProfile,
      current_user: current_user,
      profileEmail: profileEmail,
    })

    firebase.firestore().collection('users').doc(profileEmail).get().then(function(doc) {
      if (doc.exists){
        let data = doc.data();
        self.setState({
            name: data.name,
            bio: data.bio,
            skills: data.skills,
        })
      }
    }).catch(function(error){
      console.log('fetch error', error)
    })
  }

  handleMatchedRequests = () => {
    let self = this;
    let profileEmail = self.state.profileEmail;
    let matchTime = firebase.firestore.Timestamp.fromDate(new Date());

    let updateRequesterParams = {};
    updateRequesterParams[`${self.state.current_user.email}`] = matchTime;

    let updateUserParams = {};
    updateUserParams[`${profileEmail}`] = matchTime;

    let currentUser = firebase.firestore().collection('users').doc(self.state.current_user.email);
    let currentProfile = firebase.firestore().collection('users').doc(self.state.profileEmail);
    currentProfile.get().then(function(doc) { 
      if(doc.exists){
        currentProfile.update({
          matches: updateRequesterParams,
        })
      }
    })
    currentUser.get().then(function(doc) { 
      if(doc.exists){
        currentUser.update({
          matches: updateUserParams,
        })
      }
    })
  }

  createRequest = (requested_skill) => {
    let self =this;
    let currentProfile = firebase.firestore().collection('users').doc(self.state.profileEmail);
    
    currentProfile.get().then(function(doc) {
      if (doc.exists){
        let newRequests = doc.requests;
        newRequests[self.current_user.email] = requested_skill;
        currentProfile.update({
          requests: newRequests
        })
      }
    }).catch(function(error){
      console.log('fetch error', error)
    })
  }

  handleRequestSkill = (e) => {
    let self = this;
    let skill_id = e.target.id;
    let requested_skill = self.state.skills[skill_id];
    let current_email = self.state.current_user && this.state.current_user.email;
    if (current_email) {
      firebase.firestore().collection('users').doc(current_email).get().then(function(doc) {
        if (doc.exists){
          let requesters = Object.keys(doc.data().requests);

          if(requesters.includes(self.state.profileEmail)){
            self.handleMatchedRequests();
            return
          }
          self.createRequest(requested_skill);
        }
      }).catch(function(error){
        console.log('fetch error', error)
      })
    }
  }
  
  render() {
    return(
      <Container>
          <Row className="text-center">
                <Image className="img-profile-pic" src={pic} roundedCircle/>
          </Row>
          <br/>
          <Jumbotron bg="secondary">
            <h1>{this.state.name}</h1>
            <p>{this.state.bio}</p>
        </Jumbotron>
          <h2 id="yer">Skills I teach...</h2>
        <Container>
            {/* button for edit profile  */}
            {/* only show request swap for a profile that is not yours */}
            <ListGroup className="skills-List">
              {this.state.skills ? this.state.skills.map((skill, index) => <ListGroup.Item class='listItem'><div><div class="skillItem"><p>{skill}</p></div><div class="skillButton">{!this.state.isSelfProfile ? <Button id={index} onClick={this.handleRequestSkill}>Request Swap</Button> : ""}</div></div></ListGroup.Item>): []}
            </ListGroup>
        </Container>
      </Container>
    )
  }
}

export default withRouter(Profile);