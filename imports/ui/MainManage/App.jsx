import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import { withTracker } from "meteor/react-meteor-data";

import MainPage from './MainPage.jsx';

import { UserData } from "../../api/UserData";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            userData: {}
        });

        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
    }

    getMeteorData() {
        return { isAuthenticated: Meteor.userId() !== null };
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout((err) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {

        return (
            <div id="App">
                {this.props.user && this.props.userData ? <MainPage logout={this.logout} user={this.props.user} userData={this.props.userData[0]} /> : "Loading user settings..."}
            </div>
        );
    }
}

App.propTypes = {

};

export default withTracker(
    () => {
        Meteor.subscribe('users');
        Meteor.subscribe('UserData');

        const currentUser = Meteor.user();
        let currentUserData = null;

        if (currentUser != null) {
            //console.log("Searching for data of " + currentUser._id);
            currentUserData = UserData.find(
                { userId: currentUser._id }
            ).fetch();

            //console.log("App | WithTracker | currentUserData: ");
            //console.log(currentUserData);
        }

        return {
            user: currentUser,
            userData: currentUserData
        }
    }
)(App);