import React from 'react';
import {
    withRouter,
    Link,
  } from "react-router-dom";
import firebase from '../firebase';
import logo from './logo2.png';
import profile from '../profile.png';
import './Enter.css';
import {
    Container, 
    Row, 
    Col, 
    Image, 
    Card, 
    Button, 
    Jumbotron, 
    ListGroup,
    Toast,
    Table,
} from 'react-bootstrap';

class Enter extends React.Component {
    constructor() {
        super();
        this.state = {
            current_user: null,
            search:'',
            sucSearch:[],
            users: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
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
                users.push(doc.data().fullname);
            }).then(res =>{;
                self.setState({
                   requesterSkills: skills,
                   users: users,
                })
            }))
        })

        this.setState({
            history: this.props,
            current_user: current_user,
        })
    }


    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    submit = e => {
        let self = this
        if (e.key == "Enter") {
            let usersRef = firebase.firestore().collection('users');
            let tmp = []
            let users = []
            usersRef.where("skills", "array-contains", self.state.search).get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    tmp.push(doc.id)
                    users.push(doc.data().fullname)
                })
            }).then(() => {
                self.setState({
                    sucSearch: tmp,
                    users: users,
                })
            }).catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }}

    render(){
        let requesterList = this.state.requesters && this.state.requesterSkills? this.state.requesters.map((requester,index) => 
            <tr><td><Link to={`/profile/${requester}`}>{this.state.users[index]}</Link></td><td>{this.state.requesterSkills[index] && this.state.requesterSkills[index].join(', ')}</td></tr>
        ):[]

        if (this.state.search){
            requesterList = this.state.sucSearch.map((requester,index) => <tr><td><Link to={`/profile/${requester}`}>{this.state.users[index]}</Link></td><td>{this.state.search}</td></tr>)
        };

        let profile_id = this.state.current_user && this.state.current_user.email ? this.state.current_user.email : "";

        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col> 
                    <div >
                        <Link to={`/profile/${profile_id}`}>
                        <img src={profile} 
                            height="100" 
                            className="Profile" 
                            alt="profile"
                        />
                        </Link>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col >
                        <div >
                            <img src={logo}
                                style={{width: '70%'}}
                                className="Logo"
                                alt="logo"
                            />
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}>
                    <div>
                        <input
                            type="text"
                            name="learning"
                            placeholder=" Search for a new skill to learn today..."
                            style={{width: '80%', borderRadius: 10}}
                            onChange = {this.handleChange}
                            onKeyPress = {this.submit}
                            value = {this.state.search}
                        />
                    </div>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}>
                    <div>
                        {requesterList ? <h2>Skills You Might Be Interested In</h2> : <h2>Search for A New skills Today!</h2>}
                        <Table striped bordered variant="dark" align="center" style={{width: '80%', alignItems: 'center'}}>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Skills Offered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requesterList}
                            </tbody>
                        </Table>
                    </div>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Enter);