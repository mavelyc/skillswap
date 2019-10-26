import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Enter from './Enter';
import Profile from './Profile';

class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: null,
            token: null,
            errorCode: '',
            errorMessage: '',
            email: '',
            credential: '',
        };
    }

    render() {
        // react router component here to move to home page if user already initialized
        // else go to page with button for either sign in or register
        return (
            <Router>
                <Switch>
                    <Route path="/login" render={()=> <Login a={this.state}/>} />} />
                    <Route path="/register" render={()=> <Register state={this.state}/>} />} />
                    <Route path="/enter" render={()=> <Enter state={this.state}/>} />} />
                    <Route path="/profile" render={()=> <Profile state={this.state}/>} />} />
                    <Route path="/" render={()=> <Home state={this.state}/>} />} />
                </Switch>
            </Router>
        )
    }
} 

export default Root;