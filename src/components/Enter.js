import React from 'react';
import {
    withRouter,
  } from "react-router-dom";
import firebase from '../firebase';
import settings from '../settings.png';
import profile from '../profile.png';
import {
    Table
} from 'react-bootstrap'

const Enter = ({history}) => {
    let current_user = firebase.auth().currentUser;
    if (!current_user){
        history.push('/')
    }

    return(
        <div>
            <div className="float-left">
                <img src={settings} 
                    height="50" 
                    className="Settings" 
                    alt="settings"
                />
            </div>

            <div className="float-right">
                <img src={profile} 
                    height="50" 
                    className="Profile" 
                    alt="profile"
                />
            </div>

            <br/>
            <br/>

            <div>
                <input
                    type="text"
                    name="learning"
                    placeholder="Search for some skills"
                />
            </div>

            <br/>
            <br/>
            <br/>

            <div>
                <Table striped bordered variant="dark" float="center">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Skills Offering</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Jacob</td>
                        <td>Guitar Lessons</td>
                        </tr>
                        <tr>
                        <td>Thomas</td>
                        <td>Python tutorial</td>
                        </tr>
                        <tr>
                        <td>Pooja</td>
                        <td>Broom sweeping</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
      </div>
    )
}

export default withRouter(Enter);