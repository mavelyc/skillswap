import React from 'react';
import Login from './Login';
import {
    withRouter,
    Link,
  } from "react-router-dom";

const Home = () => {
    return(
    <div>
      <h1>Welcome to SkillSwap</h1>
      <div class="container">
       <div class="row">
       <div class="col-sm">
          <Link to="/register">
        <button type="button" class="btn btn-outline-primary">
          Register
        </button>
        </Link>
        </div>
        <div class="col-sm"></div>
          <Login />
        </div>
        </div>
    </div>
  )
}

export default withRouter(Home);