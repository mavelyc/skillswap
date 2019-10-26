import React from 'react';

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