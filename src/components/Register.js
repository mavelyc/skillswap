import React from 'react';
import db from '../firebase.js';
import {Form, Button} from 'react-bootstrap';
import firebase from '../firebase'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        };
    }

    changeFirstName = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    changeLastName = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = () => {
        
    }

    

    render() {
        return (
            // form to create new user
            <Form>
                <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.firstname} onChange={this.changeFirstName}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="John" />
            </Form.Group>
            <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.lastname} onChange={this.changeLastName}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="firstname" placeholder="Doe" />
            </Form.Group>
            <Form.Group size="lg" controlId="formBasicPassword" value={this.state.email} onChange={this.changeEmail}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.password} onChange={this.changePassword}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.handleSubmit}>
                Submit
            </Button>
            </Form>
            );
        }
    }
    
export default Register;