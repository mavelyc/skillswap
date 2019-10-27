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
          <div class="rectangle2"></div>
          <div class="rectangle3"></div>
          <div class="topRec">
            <p class="troll">
                <strong id="please">SkillSwap</strong>
            </p>
            <p class="theDevs">Meet The Devs</p>
          </div>
          <div class="rectangleDevs"></div>
          <p class="horribleNames">
            <h2>
            Sponsors
              </h2>
              </p>
          <Container>
          <Row>
             <Col>
             <br/><br/>
              <Image src={"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4348697.png"}
              height="275px" />
             </Col>
          </Row>
          <Row>
          <Col xs={3} md={'span:2'}>
          </Col>
          <Col xs={6} md={'span:2'}>
          <br/>
            <body class="transbox">
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
          <Col xs={2} md={'span:2'}></Col>
          <Col xs={1}>
          <Image src ={require ('./mlhtrust.png')} height="175px" />
              </Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}></Col>
            <Col xs={2}></Col>
            <Col xs={1}></Col>
          </Row>
          <Container>
            <Row>
              <Col xs={3}></Col>
              <Col xs={3}> 
                <Link to="/register">
                <button type="button" class="btn btn-success btn-lg">
                  Register
                </button>
                </Link>
              </Col>
              <Col xs={3}>
                <Login />
              </Col>
              <Col xs={1}></Col>
              <Col xs={1}></Col>
              <Col xs={1}>
              <Image src ={require ('./pleaseplease.png')} height="85px" />
              </Col>
            </Row>          
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
