import React from 'react';
import {
    withRouter,
    Link,
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

<<<<<<< HEAD
            <div className="float-right">
                <img src={profile} 
                    height="50" 
                    className="Profile" 
                    alt="profile"
                />
            </div>
=======
            <Link to="/profile"><img src={profile} 
                height="50" 
                className="Profile" 
                alt="profile"
            /></Link>
>>>>>>> 07d5d612a5afadbe0b30c00168425d938be9d1ea

            <br/>
            <br/>

<<<<<<< HEAD
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
=======
            {/* map from database query to get matched users */}
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
>>>>>>> 07d5d612a5afadbe0b30c00168425d938be9d1ea
      </div>
    )
}

export default withRouter(Enter);