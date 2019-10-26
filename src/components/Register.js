import React from 'react';
import db from '../firebase.js';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            fullname: '',
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        // prevents page reload before submitting the form
        e.preventDefault();
        // writes to db with system date objects
        db.settings({
            timestampsInSnapshots: true
        });
        // adds new user to the db
        const userRef = db.collection('users').add({
            fullname: this.state.fullname,
            email: this.state.email
        }); 
        //resets current state of the form
        this.setState({
            fullname: '',
            email: '',
        });
    };

    render() {
        return (
            // form to create new user
            <form onSubmit={this.addUser}>
                {/* name input box */}
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    onChange={this.updateInput}
                    value={this.state.fullname}
                />
                {/* email input box */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.updateInput}
                    value={this.state.email}
                />
                <button type="submit">Submit</button>
            </form>
            );
        }
    }
    
export default Register;