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
            fullname: '',
            password: ''
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changeFullName = this.changeFullName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeFullName = (e) => {
        this.setState({
            fullname: e.target.value
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
            fullname: this.state.fullname,
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
                            <Form.Group size="lg" controlId="exampleForm.ControlInput1" value={this.state.fullname} onChange={this.changeFullName}>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="fullname" placeholder="Quavo Huncho" />
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