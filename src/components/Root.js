import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import Register from './Register';
import firebase from '../firebase';
import MainMenu from './MainMenu';
import Login from './Login';
import Home from './Home';

class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            token: null,
            errorCode: '',
            errorMessage: '',
            email: '',
            credential: '',
        };
    }

    register = () => <Register />

    render() {
        // react router component here to move to home page if user already initialized
        // else go to page with button for either sign in or register
        return (
            <div>
                <h1>Welcome to SkillSwap</h1>
                <Router>
                    <MainMenu  />
                    <div>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/" component={Home} />
                    </div>
                </Router>
            </div>
        )
    }
} 

export default Root;