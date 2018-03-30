import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from "meteor/react-meteor-data";

import BasicNav from "./BasicNav.jsx";
import CategoryPage from "./CategoryPage.jsx";
import MyBets from "./MyBets.jsx";

import { Bets } from "../../api/Bets";
import { Categories } from "../../api/Categories";
import { Events } from "../../api/Events";
import { UserData } from "../../api/UserData";

import "../css/MainPage.css";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        this.AddBet = this.AddBet.bind(this);
        this.loadCategoryPages = this.loadCategoryPages.bind(this);
    }

    AddBet(eventId, prob1, prob2, probT, bet1, bet2, betT, eR1, eR2, eRt) {
        console.log("MainPage | AddBet: " + eventId + " - " + prob1 + " - " + prob2 + " - " + probT + " - " + bet1 + " - " + bet2 + " - " + betT + " - " + eR1 + " - " + eR2 + " - " + eRt);
        //alert("MainPage | Adding bet : " + bet1 + "|" + betT + "|" + bet2 + " | Earnings: " + eR);

        Meteor.call("UserData.addBet", eventId, prob1, prob2, probT, bet1, bet2, betT, eR1, eR2, eRt, (err, res) => {
            if (err) {
                alert(err);
            } else {
                alert("Bet created!");
            }
        });
    }

    loadCategoriesList() {
        let actCategories = this.props.categories;
        let res = [];

        res.push(
            <li key="MyBetsOption" className="nav-item">
                <a href={"#MyBets"} className="nav-link" >
                    My Bets...
                </a>
            </li>
        );

        res.push(actCategories.map(e => (
            <li key={e.name} className="nav-item">
                <a href={"#" + e.name} className="nav-link" >
                    {e.name}
                </a>
            </li>
        )));

        return res;
    }

    loadCategoryPages() {
        let actCategories = this.props.categories;
        let res = [];

        //console.log(this.props.userData);        
        //console.log(this.props.userBets);

        res.push(<MyBets key="MyBetsPage" myBets={this.props.userBets} AddBet={(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) => this.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt)}/>);

        res.push( actCategories.map(e => (
            <CategoryPage key={e.name + "Page"} categoryInfo={e} events={Events.find({ Category: e.name }).fetch()} userData={this.props.userData} AddBet={(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) => this.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt)} />
        )));

        return res;
    }

    render() {
        let currentUser = this.props.user;
        let currentUserAvailable = (currentUser !== undefined);

        let currentUserData = this.props.userData;
        let userDataAvailable = (currentUserData !== undefined);

        let loggedIn = (currentUser && currentUserAvailable && currentUserData && userDataAvailable);

        let numCoins = 0;

        if (loggedIn) {
            /*console.log("Render | loggedIn | AllDta: ");
            console.log(currentUser);
            console.log(currentUserData);*/

            numCoins = currentUserData.coins;

            let actCategories = this.props.categories;

            if (actCategories != null && actCategories != undefined && actCategories.length > 0) {
                //console.log(actCategories);
            }
        }

        return (
            <div id="MainPage">
                {loggedIn ? <BasicNav logout={this.props.logout} userName={currentUser.username} coins={numCoins} /> : "Error"}

                <div className="container-fluid">
                    <div className="row">

                        <nav className="col-md-2 bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    {this.loadCategoriesList()}
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-10 categoryPageContainer">
                            {this.loadCategoryPages()}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

MainPage.propTypes = {
    user: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired
}

export default withTracker(
    () => {
        Meteor.subscribe("Bets");
        Meteor.subscribe("Categories");
        Meteor.subscribe("Events");
        Meteor.subscribe("UserData");

        return {
            categories: Categories.find({}, { sort: { name: 1 } }).fetch(),
            events: Events.find({}).fetch(),
            userBets: Bets.find({}).fetch()
        }
    }
)(MainPage);