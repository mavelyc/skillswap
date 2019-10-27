import React from 'react';
import {
  withRouter,
} from "react-router-dom";
import './profile.css';
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
      }
  }
  
  render() {
    let self = this;
    let profileEmail = this.props.match.params.id;
    let current_user = firebase.auth().currentUser;
    let currentUserEmail = current_user.email;
    let userData = firebase.firestore().collection('users').doc(email);
    
    let profile = userData.get().then(function(doc) {
      if (doc.exists){
        let data = doc.data();
        self.setState({
            name: data.name,
            bio: data.bio,
            skills: data.skill,
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
          <Row>
          <Jumbotron bg="secondary">
            <h1>{this.state.name}</h1>
            <p>{this.state.bio}</p>
        </Jumbotron>
          </Row>
          <h2 id="yer">Skills I teach...</h2>
        <Container>
            <ListGroup>
                {this.state.skills ? this.skills.map(skill => <ListGroup.Item>{skill}</ListGroup.Item>): []}
            </ListGroup>
        </Container>
      </Container>
    )
  }
}

export default withRouter(Profile);