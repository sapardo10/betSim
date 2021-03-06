import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

import "../css/Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                //console.log(Meteor.userId());
                this.props.history.push('/');
            }
        });
    }

    render() {
        const error = this.state.error;
        console.log(error);

        return (
            <div id="loginDiv" className="loginDiv verticalAlignParent" style={{ backgroundImage: "img/Login.jpg" }}>
                <div className="verticalAlignSon">
                    <div className="">
                        <h1 className="text-center myMainTitle">Welcome to BetSimulator!</h1>
                        <h5 className="text-center mySubTitle">The best bet simulator ever!</h5>

                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="text-center">Login</h1>
                                </div>
                                <div className="modal-body">
                                    {error.length > 0 ?
                                        <div className="alert alert-danger">{error}</div>
                                        : ''}
                                    <form id="login-form"
                                        className="form col-md-12 center-block"
                                        onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="email"
                                                id="login-email"
                                                className="form-control input-lg"
                                                placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password"
                                                id="login-password"
                                                className="form-control input-lg"
                                                placeholder="Password" />
                                        </div>
                                        <div className="form-group text-center">
                                            <input type="submit"
                                                id="login-button"
                                                className="btn btn-primary btn-lg btn-block"
                                                value="Login" />
                                        </div>
                                        <div className="form-group text-center">
                                            <p className="text-center">
                                                Don't have an account? Register <Link to="/signup">here</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer" style={{ borderTop: 0 }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;