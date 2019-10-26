import React from 'react';
import db from '../firebase.js';
import {Form, Button} from 'react-bootstrap';
import firebase from '../firebase'

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
            <Form>
                <Form.Group size="lg" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="John" />
            </Form.Group>
            <Form.Group size="lg" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="firstname" placeholder="Doe" />
            </Form.Group>
            <Form.Group size="lg" controlId="formBasicPassword">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group size="lg" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            );
        }
    }
    
export default Register;