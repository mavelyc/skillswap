import React from 'react';
import Login from './Login';
import {
    withRouter,
    Link,
  } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap"

const Home = () => {
    return(
    <div>
    <Container>
      <Row>
        <Col>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkZSYzoRTfsPFfhWz2m-5HG8dxIi6KDqg3qMpBXTN8yc2VcGg&s" fluid />
        </Col>
      </Row>
      <Row>
        <Col>
      <h1>Welcome to SkillSwap</h1>
      </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
            <Link to="/register">
            <button type="button" class="btn btn-outline-success">
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
    </div>
    )
}


export default withRouter(Home);