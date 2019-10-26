import React from 'react';
import {
    withRouter,
  } from "react-router-dom";
import firebase from '../firebase';

const Enter = ({history}) => {
    let current_user = firebase.auth().currentUser;
    if (!current_user){
        history.push('/')
    }
    return(
        <div>
            <h1>Enter</h1>
        </div>
    )
}

export default withRouter(Enter);