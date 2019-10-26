import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import logo from '../logo.svg';

const MainMenu = () => {
    return(
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to SkillSwap</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    )
}

export default MainMenu;