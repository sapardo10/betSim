import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddBetModal from "./AddBetModal.jsx";
import "../css/EventCard.css";

class EventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colSize: "col-md-4"
        };
    }

    AddBet(b1, b2, bT, eR1, eR2, eRt){
        let eInfo = this.props.eventInfo;
        //console.log("EventCard earnings: " + eR);

        this.props.AddBet(eInfo._id, eInfo.Prob1, eInfo.Prob2, eInfo.Tie, b1, b2, bT, eR1, eR2, eRt);
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

    getFee(percent) {
        let res = 100 / percent;

        return Math.round(res * 100) / 100;
    }

    render() {
        let eInfo = this.props.eventInfo;
        
        let modal = "";

        modal = <AddBetModal eventInfo={eInfo} fromW="eventCard" AddBet={(b1, b2, bT, eR1, eR2, eRt) => this.AddBet(b1, b2, bT, eR1, eR2, eRt)}/>;

        return (
            <div id={eInfo.Name} className={this.state.colSize}>
                <div className="card myCard">
                    <img className="card-img-top" src={"img/" + eInfo.Image} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{eInfo.Name}</h4>
                        <h5 className="card-title subTitle">{eInfo.Place}</h5>
                        <h5 className="card-title subTitle">{eInfo.Date}</h5>

                        <div className="btn-group myButtonGroup">
                            <span className="badge badge-primary myButtonGroup">{eInfo.Team1}</span>
                            <span className="badge badge-secondary myButtonGroup">Tie</span>
                            <span className="badge badge-primary myButtonGroup">{eInfo.Team2}</span>
                        </div>

                        <div className="btn-group myButtonGroup" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary myButtonOnGroup" data-toggle="modal" data-target={"#Add" + eInfo.Name + "eventCardBetModal"}>{"" + this.getFee(eInfo.Prob1)}</button>
                            <button type="button" className="btn btn-secondary myButtonOnGroup" data-toggle="modal" data-target={"#Add" + eInfo.Name + "eventCardBetModal"}>{"" + this.getFee(eInfo.Tie)}</button>
                            <button type="button" className="btn btn-primary myButtonOnGroup" data-toggle="modal" data-target={"#Add" + eInfo.Name + "eventCardBetModal"}>{"" + this.getFee(eInfo.Prob2)}</button>
                        </div>


                        <hr className="my-4" />

                        <button className="btn btn-outline-info myCardButton" type="submit">More info</button>
                    </div>
                </div>
                {modal}
            </div>
        );
    }
}

EventCard.propTypes = {
    eventInfo: PropTypes.object.isRequired
}

export default EventCard;