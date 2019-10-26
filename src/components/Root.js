import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import User from './User';
import Register from './Register'
import firebase from '../firebase';
import { Button } 

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

    signIn = () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            this.setState({
                token: result.credential.accessToken,
                user: result.user,
            });
            console.log(this.state)
        }).catch(function(error) {
        // Handle Errors here.
            this.setState({
                erroCode: error.code,
                errorrMessage: error.message,
                email:  error.email,
                credential: error.credential,
            });
            console.log(this.state)
        });
    }

    register = () => <Register />

    render() {
        // react router component here to move to home page if user already initialized
        // else go to page with button for either sign in or register
        return (
            <Router>

            </Router>
        )
    }
} 

export default Root;