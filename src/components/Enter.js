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

class Enter extends React.Component {
    constructor() {
        super();
        this.state = {
            current_user: null,
        };
    };

    componentDidMount () {
        let current_user = firebase.auth().currentUser;
        let db = firebase.firestore().collection('users');
        let users = []
        let self = this;
        
        db.doc(current_user.email).get().then(function(doc) {
            self.setState({
                requesters: Object.keys(doc.data().requests),
            })
            let emails = Object.keys(doc.data().requests);
            let skills = []
            emails.map(email => db.doc(email).get().then(function(doc) {

                skills.push(doc.data().skills);
            }).then(res =>{;
                self.setState({
                   requesterSkills: skills,
                })
            }))
        })

        this.setState({
            history: this.props,
            current_user: current_user,
        })
    }
    render(){
        console.log('this.state');
        console.log(this.state);
        let test = this.state.requesters && this.state.requesterSkills ? this.state.requesters.map((requester,index) => 
            <tr><td>{requester}</td><td>{this.state.requesterSkills[index]}</td></tr>
        ):[]
        console.log("test",test)
       //  if (!this.state.current_user){
       //      this.state.history.push('/')
       //  }

        return(
            <div>
                <div className="float-left">
                    <img src={settings} 
                        height="50" 
                        className="Settings" 
                        alt="settings"
                    />
                </div>

               {/*  <Link to={`/profile/${this.state.current_user.email}`}><img src={profile} 
                    height="50" 
                    className="Profile" 
                    alt="profile"
                /></Link */}>

                <br/>
                <br/>
                <br/>

                <div>
                    <input
                        type="text"
                        name="learning"
                        placeholder=" Search for some skills"
                        style={{width: "450px", borderRadius: 10}}
                    />
                </div>

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
                            {test}
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
}

export default withRouter(Enter);