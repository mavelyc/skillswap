import React from 'react';
import {
  withRouter,
} from "react-router-dom";
import './Profile.css';
import {
  Container, 
  Row, 
  Col, 
  Image, 
  Card, 
  Button, 
  Jumbotron, 
  ListGroup,
  Toast,
} from 'react-bootstrap';
import pic from '../images/cmav.jpg'
import firebase from '../firebase';
import moment from 'moment';

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
          showMatched: false,
          matchTime: null,
      }
  }

  toggleShowMatched = () => {
    this.setState({
      showMatched: !this.state.showMatched,
    })
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
            fullname: data.fullname,
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
    self.setState({
      matchTime: matchTime,
    })

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
    }).then(()=> this.toggleShowMatched())
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
            self.setState({
              matchedSkill: requested_skill,
            })
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
          <Row>
            <Col xs={6}>
              <Toast show={this.state.showMatched} onClose={this.toggleShowMatched}>
                <Toast.Header>
                  <strong className="mr-auto">Message from SkillSwap</strong>
                  <small>{this.state.matchTime && moment(this.state.matchTime.toDate()).fromNow()}</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you just matched with {this.state.fullname} for the skill {this.state.matchedSkill}!</Toast.Body>
              </Toast>
            </Col>
          </Row>
          <Row className="text-center">
                <Image className="img-profile-pic" src={pic} roundedCircle/>
          </Row>
          <br/>
          <Jumbotron bg="secondary">
            <h1>{this.state.fullname}</h1>
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