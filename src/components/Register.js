import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {
    withRouter,
  } from "react-router-dom";
import firebase from '../firebase.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const {history} = this.props;
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            history.push('/register')
        });

        firebase.firestore().collection('users').doc(this.state.email).set({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }).then(() => {
            history.push('/enter')
        }).catch(e => console.log(e)); 
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                    <Col>
                        {/*// form to create new user*/}
                        <Form>
                            <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.firstname} onChange={this.changeFirstName}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstname" placeholder="Huncho" />
                        </Form.Group>
                        <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.lastname} onChange={this.changeLastName}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="firstname" placeholder="Quavo" />
                        </Form.Group>
                        <Form.Group size="lg" controlId="formBasicPassword" value={this.state.email} onChange={this.changeEmail}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.password} onChange={this.changePassword}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" />
                        </Form.Group>
                        <Button variant="success" type="button" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            );
        }
    }
    
export default withRouter(Register);