import React from 'react'
import {
  withRouter,
} from "react-router-dom";
import '../App.css';
import firebase from '../firebase';
import {
Spinner,
  } from "react-bootstrap"

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
            let user = result.user;
            self.setState({
                token: result.credential.accessToken,
                user: user,
                isLoggedIn: true,
                email: user.email,
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
        
        return <button type="button" class="btn btn-success btn-lg" onClick={this.logIn}>Log In</button>
    }
} export default withRouter(Login);
