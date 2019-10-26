import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import '../App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Enter from './Enter';

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
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path='/enter' component={Enter} />
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        )
    }
} 

export default Root;