import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddBetModal from "./AddBetModal.jsx";
import "../css/EventBetCard.css";


class EventBetCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colSize: "col-md-4"
        };
    }

    AddBet(b1, b2, bT, eR1, eR2, eRt){
        let eInfo = this.props.eventInfo[0];
        //console.log( "EventBetCard earnings: " + eR1 + "-" + eR2 + "-" + eRt);

        this.props.AddBet(eInfo._id, eInfo.Prob1, eInfo.Prob2, eInfo.Tie, b1, b2, bT, eR1, eR2, eRt);
    }

    getFee(percent) {
        let res = 100 / percent;

        return Math.round(res * 100) / 100;
    }

    componentDidMount() {
        if (this.state.colSize) {
            window.addEventListener('resize', () => {
                let nColSize = "col"

                let width = window.innerWidth;

                if (width >= 1500) {
                    nColSize = "col-md-3";
                } else if (width > 900 && width < 1500) {
                    nColSize = "col-md-4";
                } else {
                    nColSize = "col-md-6";
                }

                this.setState({ colSize: nColSize });
            }, false);
        }
    }

    loadEventBets() {
        //console.log("EventBetCard | Bets: ");
        //console.log(this.props.eventBetsInfo);

        let res = "Loading...";
        let bInfo = this.props.eventBetsInfo;

        //console.log("Bets of event: ");
        //console.log(bInfo);

        res = []
        for (let i = 0; i < bInfo.length; i++) {
            let e = bInfo[i];

            res.push(
                <div key={"Bet#" + (i+1) + "Of" + this.props.eventInfo.Name} className="row myBetGroup">
                    <div className="btn-group myButtonGroup">
                        <span className="badge badge-warning myBetTitle">{this.getFee(e.Prob1)}</span>
                        <span className="badge badge-warning myBetTitle">{this.getFee(e.ProbT)}</span>
                        <span className="badge badge-warning myBetTitle">{this.getFee(e.Prob2)}</span>
                    </div>

                    <div className="btn-group myButtonGroup">
                        <span className="badge badge-warning myBetAmount">{e.Team1}</span>
                        <span className="badge badge-warning myBetAmount">{e.Tie}</span>
                        <span className="badge badge-warning myBetAmount">{e.Team2}</span>
                    </div>
                </div>

            );
        }

        return res;
    }

    render() {
        
        const txtLoading = "Loading...";
        let Name = txtLoading;
        let Place = txtLoading;
        let Date = txtLoading;
        let Image = "Basic_Event.png";
        let Team1 = txtLoading;
        let Team2 = txtLoading;
        let Prob1 = txtLoading;
        let Tie = txtLoading;
        let Prob2 = txtLoading;

        let eInfo = this.props.eventInfo;
        let bInfo = this.props.eventBetsInfo;

        let actBetsEarnings = 0;

        //console.log("EventBetCard | Event info: ");
        //console.log(eInfo);
        let modal = "Loading event info...";

        if (eInfo != null && eInfo != undefined && eInfo.length > 0) {
            eInfo = eInfo[0];

            //console.log(eInfo);

            Name = eInfo.Name;
            Place = eInfo.Place;
            Date = eInfo.Date;
            Image = eInfo.Image;
            Team1 = eInfo.Team1;
            Team2 = eInfo.Team2;
            Prob1 = eInfo.Prob1;
            Tie = eInfo.Tie;
            Prob2 = eInfo.Prob2;
            
            modal = <AddBetModal eventInfo={eInfo} fromW="betCard" AddBet={(b1, b2, bT, eR1, eR2, eRt) => this.AddBet(b1, b2, bT, eR1, eR2, eRt)}/>;

            bInfo.map(e => {
                actBetsEarnings += e.Earnings;
            });
           //console.log(actBetsEarnings);            
        }

        return (
            <div id={Name} className={this.state.colSize + " myBetCard"}>
                <div className="card myCard">
                    <img className="card-img-top" src={"img/" + Image} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{Name}</h4>
                        <h5 className="card-title subTitle">{Place}</h5>
                        <h5 className="card-title subTitle">{Date}</h5>

                        <div className="btn-group myButtonGroup">
                            <span className="badge badge-primary myButtonGroup">{Team1}</span>
                            <span className="badge badge-secondary myButtonGroup">Tie</span>
                            <span className="badge badge-primary myButtonGroup">{Team2}</span>
                        </div>

                        <div className="btn-group myButtonGroup" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary myButtonOnGroup" data-toggle="modal" data-target={"#Add" + Name + "betCardBetModal"}>{"" + this.getFee(Prob1)}</button>
                            <button type="button" className="btn btn-secondary myButtonOnGroup" data-toggle="modal" data-target={"#Add" + Name + "betCardBetModal"}>{"" + this.getFee(Tie)}</button>
                            <button type="button" className="btn btn-primary myButtonOnGroup" data-toggle="modal" data-target={"#Add" + Name + "betCardBetModal"}>{"" + this.getFee(Prob2)}</button>
                        </div>

                        <hr className="my-4" />
                        <h5 className="card-title">Bets...</h5>

                        {this.loadEventBets()}

                        <hr className="my-4" />

                        <button className="btn btn-outline-info myCardButton" type="submit">More info</button>
                    </div>
                </div>
                {modal}
            </div>
        );
    }
}

EventBetCard.propTypes = {
    eventBetsInfo: PropTypes.array.isRequired,
    eventInfo: PropTypes.array.isRequired
}

export default EventBetCard;