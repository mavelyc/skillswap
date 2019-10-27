import React from 'react';
import Login from './Login';
import {
    withRouter,
    Link,
  } from "react-router-dom";
import {
  Container,
  Alert,
  Row,
  Col,
  Image,
  Card,
  Button,
  Jumbotron,
  ListGroup,
  Nav,
} from "react-bootstrap"
import '../Home.css';
import pic from '../images/cmav.jpg'


class Home extends React.Component {
    
  constructor() {
      super();
      this.state={}
  }
  
  render() {
    return(
      <div class="bg">
      <Container>
          <Alert variant={'success'}>
            <h1>
              <strong>
                SkillSwap
              </strong>
                </h1>
                
          </Alert>
          <Container>
          <Row>
             <Col>
              <Image src={"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4348697.png"}
              height="200px" />
             </Col>
          </Row>
          <Row>
          <Col>
          </Col>
          <Col xs={6}>
          <br/>
            <body>
            <h3>
            <br/>
              Become the <strong>Student</strong> and the <strong>Teacher </strong>
            </h3>
            <h5>
              Find someone help you discover your passion, 
              and make amazing connections along the way!
              Did we mention it's absolutely free? jk u broke boi get ya weight up
            </h5>
            <br/>
            </body>
          </Col>
          <Col></Col>
          </Row>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Link to="/register">
                <button type="button" class="btn btn-success btn-lg">
                  Register
                </button>
                </Link>
              </Col>
              <Col>
                <Login />
              </Col>
              <Col></Col>
            </Row>          
            </Container>
      </Container>
      <Row></Row>
      <Row></Row> 
      <Row></Row>  
  </Container>
</div>
    )
  }
}
export default withRouter(Home);
