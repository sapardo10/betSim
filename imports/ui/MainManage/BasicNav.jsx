import React, { Component } from 'react';

import "../css/BasicNav.css";

class BasicNav extends Component {
    render() {
        return (
            <div id="BasicNav" className="myNav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark myNav">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                        <img src="" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Bet Simulator
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navContent">
                    
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a name="" className="nav-link">Welcome {this.props.userName}! <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item">
                                <a id="coins-info" className="nav-link">Coins bag: {this.props.coins}</a>
                            </li>

                            <li className="nav-item">
                                <a id="coins-info" className="nav-link">In bet: 0</a>
                            </li>
                        </ul>

                        <button onClick={this.props.logout} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button>
                    </div>
                </nav>

            </div>
        );
    }
}

export default BasicNav;