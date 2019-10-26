import React from 'react';
import Login from './Login';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    withRouter,
    Link,
  } from "react-router-dom";

const Home = () => {
    return(
    <div>
      Home
      <h1>Welcome to SkillSwap</h1>
        <Login />
        <Link to="/register">
            <button>Register</button>
        </Link>
    </div>
  )
}

export default withRouter(Home);