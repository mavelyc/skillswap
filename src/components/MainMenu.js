import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import settings from '../settings.png';
import profile from '../profile.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar';

const MainMenu = () => {

    return(
      <div>
              <img src={settings} 
              height="50" 
              className="Settings" 
              alt="settings"
              className="align-top float-left"/>

              <img src={profile} 
              height="50" 
              className="Profile" 
              alt="profile"
              className="align-top float-left"/>

            <input
              type="text"
              name="learning"
              placeholder="Search for some skills"
              className="align-bottom"/>

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
    )
}

export default MainMenu;