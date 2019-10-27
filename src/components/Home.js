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
} from "react-bootstrap"
import '../Home.css';
var x = "./mlhtrust.png"



class Home extends React.Component {
    
  constructor() {
      super();
      this.state={}
  }
  
  render() {
    return(
      <div>
      <div class="rectangle">
        <p class="bucktee">
        <strong>Developed by: while(inSauga)™</strong>
        </p>
      </div>
          <div class="topRec">
            <p class="troll">
                <strong id="please">SkillSwap</strong>
            </p>
          </div>
          <Container>
            <Row>
              <Col></Col>
            </Row>
          <Row>
            <Col xs={3}></Col>
             <Col xs={6}>
              <Image src = {require  ("./logo2.png")}
              fluid />
             </Col>
             <Col xs={3}></Col>
          </Row>
          <Row>
          <Col xs={2} md={'span:2'}>
          </Col>
          <Col xs={8} md={'span:2'}>
            <body class="transbox">
            <h3>
            <br/>
              Become the <strong>Student</strong> and the <strong>Teacher </strong>
            </h3>
            <h5>
              Find someone help you discover your passion, 
              and make amazing connections along the way!
              Did we mention it's absolutely <strong>free?</strong>
            </h5>
            <br/>
            </body>
          </Col>
          <Col xs={2} md={'span:2'}></Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}></Col>
            <Col xs={2}></Col>
            <Col xs={1}></Col>
          </Row>
          <Container>
            <Row>
              <Col xs={2}></Col>
              <Col xs={4}> 
                <Link to="/register">
                <button type="button" class="btn btn-success btn-lg">
                  Register
                </button>
                </Link>
              </Col>
              <Col xs={4}>
                <Login />
              </Col>
              <Col xs={2}></Col>
            </Row>     
            <br/>     
            </Container>
      </Container>
      <Row></Row>
      <Row></Row> 
      <Row></Row>  
</div>


    )
  }
}
export default withRouter(Home);
