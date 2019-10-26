import React from 'react';
import {
  withRouter,
} from "react-router-dom";
import '../App.css';
import {Container, Row, Col, Image, Card, Button, Jumbotron, ListGroup} from 'react-bootstrap';
import pic from '../images/cmav.jpg'


class Profile extends React.Component {
    
  constructor() {
      super();
      this.state={}
  }
  
  render() {
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