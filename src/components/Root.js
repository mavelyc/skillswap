import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import '../App.css';
import Register from './Register';
import firebase from '../firebase';
// import MainMenu from './MainMenu';
// import Login from './Login';
// import Home from './Home';

const Public = () => (
<div> This is a public page </div>
);
  
const Private = () => (
    <div> This is a private page </div>
);

// const Login = () => (
//     <div> Login Page <button>login</button> </div>
// );

class Login extends React.Component {
    state = {
        redirectToPreviousRoute: false,
        user: null,
        token: null,
        errorCode: '',
        errorMessage: '',
        email: '',
        credential: '',
    };
  
    logIn = () => {
        let self = this;
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            self.setState({
                token: result.credential.accessToken,
                user: result.user,
            });
            AuthService.authenticate(() => {
                self.setState({ redirectToPreviousRoute: true });
            });
        }).catch(function(error) {
        // Handle Errors here.
            self.setState({
                errorCode: error.code,
                errorrMessage: error.message,
                email:  error.email,
                credential: error.credential,
            });
        });
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      const { redirectToPreviousRoute } = this.state;
  
      if (redirectToPreviousRoute) {
        return <Redirect to={from} />;
      }
  
      console.log(this.logIn)

      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          
          <button onClick={this.logIn}>Log in</button>
        </div>
      );
    }
  }

const AuthService = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    logout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
}

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      AuthService.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect 
            to={{
            pathname: '/login',
            state: { from: props.location }
            }}
        />
    )} />
  );

const AuthStatus = withRouter(({ history }) => (
    AuthService.isAuthenticated ? (
        <p>
        Welcome! <button onClick={() => {
            AuthService.logout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
));

class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            token: null,
            errorCode: '',
            errorMessage: '',
            email: '',
            credential: '',
        };
    }

    register = () => <Register />

    render() {
        // react router component here to move to home page if user already initialized
        // else go to page with button for either sign in or register
        return (
            // <div>
            //     <Router>
            //         <div>
            //             <Route path="/login" component={Login} />
            //             <Route path="/register" component={Register} />
            //             <Route path="/" component={MainMenu} />
            //             <Route path="/home" component={Home} />
            //         </div>
            //     </Router>
            // </div>
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                <AuthStatus />
                <ul>
                    <li><Link to='/public'> Public </Link></li>
                    <li><Link to='/private'> Private </Link></li>
                </ul>

                <hr/>

                <Route path='/public' component={Public} />
                <Route path="/login" component={Login}/>
                <SecretRoute path='/private' component={Private} />
                </div>
            </Router>
        )
    }
} 

export default Root;