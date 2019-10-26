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
import User from './User';
import Register from './Register'
import firebase from '../firebase';
import Private from './Root';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            token: null,
            errorCode: '',
            errorMessage: '',
            email: '',
            credential: '',
            isLoggedIn: false,
        };
    }

    logIn = e => {
        const {history} = this.props;
        let provider = new firebase.auth.GoogleAuthProvider();
        let self = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            self.setState({
                token: result.credential.accessToken,
                user: result.user,
                isLoggedIn: true,
            });
            history.push('/enter')
        }).catch(function(error) {
        // Handle Errors here.
            self.setState({
                errorCode: error.code,
                errorrMessage: error.message,
                email:  error.email,
                credential: error.credential,
            });
        });
    }

    render() {
        // react router component here to move to home page if user already initialized
        // else go to page with button for either sign in or register
        
        return <button type="button" onClick={this.logIn}>Log In</button>
        {/* <Route path='/private' component={Private} /> */}
    }
} export default withRouter(Login);