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
import Login from './Login';

const Public = () => (
<div> This is a public page </div>
);
  
const Private = () => (
    <div> This is a private page </div>
);

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
            isLoggedIn: false,
            user: null,
            token: null,
            errorCode: '',
            errorMessage: '',
            email: '',
            credential: '',
        };
    }

    render() {
        // react router component here to move to home page if user already initialized
        // else go to page with button for either sign in or register
        return (
            <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register} />
                <SecretRoute path='/' component={Private} />
            </Switch>
            </Router>
        )
    }
} 


export default Root;