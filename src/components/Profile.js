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
    let profileEmail = this.props.match.params.id;
    let current_user = firebase.auth().currentUser;
    let isSelfProfile = profileEmail == current_user.email;

    this.setState({
      isSelfProfile: isSelfProfile,
      current_user: current_user,
      profileEmail: profileEmail,
    })
  }

  handleRequestSkill = (e) => {
    let skill_id = e.target.id;
    let requested_skill = this.state.skills[skill_id];
    console.log('requested_skill', requested_skill)
  }
  
  render() {
    let self = this;
    console.log('pemail',self.state.profileEmail);
    let userData = firebase.firestore().collection('users').doc(self.state.profileEmail);
    
    let profile = userData.get().then(function(doc) {
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