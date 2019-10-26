import React from 'react';
import {
  withRouter,
} from "react-router-dom";
import '../App.css';
import {Container, Row, Col, Image, Card, Button, Jumbotron, ListGroup} from 'react-bootstrap';
import pic from '../images/cmav.jpg'
import firebase from '../firebase';

class Profile extends React.Component {
    
  constructor() {
      super();
      this.state={}
  }
  
  render() {
    let current_user = firebase.auth().currentUser;
    console.log(current_user);
    let email = current_user.email;
    console.log(email)
    let userData = firebase.firestore().collection('users').doc(email);
    let profile = userData.get().then(function(doc) {
      if (doc.exists){
        console.log('exists', doc)
      } else{
        console.log('user not found')
      }
    }).catch(function(error){
      console.log('fetch error', error)
    })
    // .get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         console.log('doc', doc.id)
    //         console.log('data', doc.data())
    //         return doc.data();
    //     });
    // });
    console.log(profile)
    // let bio = current_user.bio;
    // let skills = current_user.skills;
    // console.log(name)
    return(
      <Container>
          <Row className="text-center">
                <Image className="img-profile-pic" src={pic} roundedCircle/>
          </Row>
          <br/>
          <Row>
          <Jumbotron bg="secondary">
            <h1>Name</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            </Jumbotron>
          </Row>
          <h2 id="yer">Skills I teach...</h2>
          <Container>
          <ListGroup>
            <ListGroup.Item text-color="black">Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            </Container>
      </Container>
    )
  }
}

export default withRouter(Profile);