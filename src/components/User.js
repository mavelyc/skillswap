import React from 'react';
import db from '../firebase.js';

class User extends React.Component {
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
        e.preventDefault();
        const userRef = db.collection('users').add({
            fullname: this.state.fullname,
            email: this.state.email
        }); 
        this.setState({
            fullname: '',
            email: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    onChange={this.updateInput}
                    value={this.state.fullname}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Full name"
                    onChange={this.updateInput}
                    value={this.state.email}
                />
                <button type="submit">Submit</button>
            </form>
            );
        }
    }
export default User;