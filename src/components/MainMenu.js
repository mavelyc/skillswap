import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MainMenu = () => {
    return(
      <div>
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