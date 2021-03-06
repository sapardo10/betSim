import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from "meteor/react-meteor-data";

import Chart from 'chart.js';

import "../css/EventPage.css";

class EventPage extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            addingEvents: "none",
            updatingScores: "none",
            score1: 0,
            score2: 0,
            eventText: "",
            minute: 0,
            time: 0
        });

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        //this.generateChart();        
    }

    componentDidUpdate() {
        //this.generateChart();
    }

    transparentize(color, opacity) {
        var alpha = opacity === undefined ? 0.5 : 1 - opacity;
        return Color(color).alpha(alpha).rgbString();
    }

    generateChart() {
        let bInfo = this.props.betsInfo;
        let eInfo = this.props.eventInfo;
        var ctx = document.getElementById('myChart').getContext('2d');

        eInfo = eInfo[0];

        //console.log("Event bets data");
        //console.log(bInfo);

        /* Example
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            },

            // Configuration options go here
            options: {}
        });*/

        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7"],
                datasets: [{
                    backgroundColor: this.transparentize("rgb(255, 0, 0)", 0.5),
                    borderColor: "rgba(255, 0, 0, 255)",
                    data: [0, 10, 20, 30, -5, 0, 10],
                    label: 'Dataset',
                    fill: "origin"
                }]
            },
            options: Chart.helpers.merge({
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    text: eInfo.Name + " bets",
                    display: true
                }
            })
        });

        /*var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["Team 1", "Team 2"],
                datasets: [{
                    label: "Bets",
                    backgroundColor: "rgb(255,0,0)",
                    borderColor: "rgb(0, 255, 0)",
                    data: [0, 10, 20, -5, -10],
                    fill: 'origin',
                }]
            },

            // Configuration options go here
            options: {}
        });*/

        return chart;
    }

    getWinner() {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];

        //console.log(eInfo);
        //console.log("Event result: " + eInfo.Team1R + " - " + eInfo.Team2R);

        if (eInfo.Team1R > eInfo.Team2R) {
            return eInfo.Team1;
        } else if (eInfo.Team1R < eInfo.Team2R) {
            return eInfo.Team2;
        } else {
            return "It's a Tie!"
        }
    }

    startEvent() {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];

        this.props.startEvent(eInfo._id);
    }

    endEvent(eID) {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];

        this.props.endEvent(eInfo._id);
    }

    loadBetsBar() {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];
        let bInfo = this.props.betsInfo;
        let res = "Loading bar...";
        let numBets1 = 0;
        let numBets2 = 0;
        let numBetsT = 0;

        bInfo.map((b) => {
            if (b.Team1 > 0) {
                numBets1++;
            }

            if (b.Team2 > 0) {
                numBets2++;
            }

            if (b.Tie > 0) {
                numBetsT++;
            }
        });

        let total = numBets1 + numBets2 + numBetsT;

        let per1 = (numBets1 * 100) / total;
        let per2 = (numBets2 * 100) / total;
        let perT = (numBetsT * 100) / total;

        per1 = Math.round(per1 * 100) / 100;
        per2 = Math.round(per2 * 100) / 100;
        perT = Math.round(perT * 100) / 100;

        //console.log("Bets bar: " + per1 + "|" + perT + "|" + per2 + ":>" + total);
        if (total == 0) {
            return <h5>There are no bets yet!</h5>
        } else {
            //console.log("Printing bets bar");
            return (<div id="BetsBar">

                <h5>There are no bets yet!</h5>
                <div className="btn-group myButtonGroup">
                    <span className="badge badge-info myButtonGroup">{eInfo.Team1}</span>
                    <span className="badge badge-warning myButtonGroup">Tie</span>
                    <span className="badge badge-primary myButtonGroup">{eInfo.Team2}</span>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={per1} aria-valuemin="0" aria-valuemax="100" style={{ width: per1 + "%" }}>{per1 + "%"}</div>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={perT} aria-valuemin="0" aria-valuemax="100" style={{ width: perT + "%" }}>{perT + "%"}</div>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={per2} aria-valuemin="0" aria-valuemax="100" style={{ width: per2 + "%" }}>{per2 + "%"}</div>
                </div>
            </div>);
        }
    }

    startUpdatingScore() {
        this.setState({
            updatingScores: " "
        });
    }

    endUpdatingScores() {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];

        let sc1 = parseInt(this.state.score1);
        let sc2 = parseInt(this.state.score2);

        Meteor.call("Events.updateScore", eInfo._id, sc1, sc2, (err, res) => {
            this.setState({
                updatingScores: "none"
            });

            //this.props.reRender(eInfo._id);
        });
    }

    startMatchEvent(){
        this.setState({
            addingEvents: " "
        });
    }

    endMatchEvent() {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];

        let fText = this.state.eventText;
        let fMin = parseInt(this.state.minute);
        let fTime = parseInt(this.state.time);

        Meteor.call("Events.addMatchEvent", eInfo._id, fText, fMin, fTime, (err, res) => {
            this.setState({
                addingEvents: "none"
            });
        });
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    generateListOfEvents() {
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];
        //console.log("Generate list of evenst: ");
        //console.log(eInfo);

        let res = <li className="list-group-item">Loading Events...</li>;
        let count = 0;
        res = eInfo.Events.map((e) => (
            count++,
            <li key={"Event#" + count} className="list-group-item d-flex justify-content-between align-items-center">
                {e.text}
                <span className="badge badge-primary badge-pill">{"At " + e.minute + " minutes of the " + e.time + " set"}</span>
            </li>
        ));

        //console.log(res);
        return res;
    }

    render() {
        //console.log("Render");

        let bInfo = this.props.betsInfo;
        let eInfo = this.props.eventInfo;
        eInfo = eInfo[0];
        
        let state = "";
        let score = ""
        let winnerInfo = ""

        let eventState = "NOT_STARTED";

        if(eInfo){
            eventState = eInfo.State;

            if (eInfo.State == "STARTED") {
                state = <h5 className="txtLive">Now Live!</h5>
                score = <h5 className="txtScore">{eInfo.Team1R + " - " + eInfo.Team2R}</h5>
            } else if (eInfo.State == "FINISHED") {
                state = <h5 className="txtLive">Event finished!</h5>
                score = <h5 className="txtScore">{eInfo.Team1R + " - " + eInfo.Team2R}</h5>
                winnerInfo = <h5 className="txtWinner">{this.getWinner() + " win!"}</h5>
            } else {
                state = <h5>Waiting for the event to start!</h5>
            }
        }       

        let updatingScores = this.state.updatingScores;
        let addingEvents = this.state.addingEvents;

        return (
            <div id="EventModal" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg myEventModal" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{eInfo.Name + " info..."}</h5>

                            <div className="rightButtons">
                                {this.props.userType == "ADMIN" && eventState == "NOT_STARTED" ? <button onClick={() => this.startEvent()} type="button" className="btn btn-success myAdminButton">Start event</button> : ""}
                                {this.props.userType == "ADMIN" && eventState == "STARTED" ? <button onClick={() => this.endEvent()} type="button" className="btn btn-danger myAdminButton">End event</button> : ""}
                                {this.props.userType == "ADMIN" && eventState == "STARTED" ? <button onClick={() => this.startUpdatingScore()} type="button" className="btn btn-info">Update score</button> : ""}

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div id="UpdateInputs" className="container" style={{ display: updatingScores }}>

                                    <div className="form-row bottomPadding">
                                        <div className="form-group col-md-6">
                                            <label>{eInfo.Team1 + " score:"}</label>
                                            <input type="number" min="0" step="1" className="form-control" id="score1" placeholder="" value={this.state.score1} onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label>{eInfo.Team2 + " score:"}</label>
                                            <input type="number" min="0" step="1" className="form-control" id="score2" placeholder="" value={this.state.score2} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <button onClick={() => this.endUpdatingScores()} type="button" className="btn btn-success">Update score!</button>

                                    <hr className="my-4" />
                                </div>

                                <div id="AddEventInputs" className="container" style={{ display: addingEvents}}>

                                    <div className="form-row bottomPadding">
                                        <div className="form-group col-md-6">
                                            <label>Minute of the event: </label>
                                            <input type="number" min="0" step="1" className="form-control" id="minute" placeholder="" value={this.state.minute} onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label>Set/Quarter of the event:</label>
                                            <input type="number" min="0" step="1" className="form-control" id="time" placeholder="" value={this.state.time} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="eventText">Event: </label>
                                        <textarea className="form-control" id="eventText" rows="3" value={this.state.eventText} onChange={this.handleChange} ></textarea>
                                    </div>

                                    <button onClick={() => this.endMatchEvent()} type="button" className="btn btn-success">Add match event</button>

                                    <hr className="my-4" />
                                </div>


                                <h5>Date: {eInfo.Date}</h5>
                                <div className="centeredDiv">
                                    {state}
                                    {score}
                                    {winnerInfo}
                                    {this.loadBetsBar()}
                                    <h5>Match events: </h5>
                                    <ul className="list-group">
                                        {this.generateListOfEvents()}
                                    </ul>
                                    <hr className="my-4" />
                                    {this.props.userType == "ADMIN" && eventState == "STARTED" ? <button onClick={() => this.startMatchEvent()} type="button" className="btn btn-warning myAdminButton">Add match event</button> : ""}
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EventPage.propTypes = {
    userType: PropTypes.string.isRequired,
    eventInfo: PropTypes.array.isRequired,
    betsInfo: PropTypes.array.isRequired
};
export default withTracker(
    () => {
        Meteor.subscribe("Events");

        return {
        }
    }
)(EventPage);