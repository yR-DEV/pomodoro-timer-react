import React, { Component } from 'react';

export default class Timer extends Component {
    
    timer = () => {
        if (this.props.toggleTimer === false) {
            // console.log('timer is on we need to start');
            clearInterval(this.props.idTime)
            this.props.setCurrentTime("25 : 00")
            this.props.setToggleTimer()
        } else {
            this.props.cycle === "session" ? this.props.startPomoTimer(this.props.workTime) : this.props.startPomoTimer(this.props.breakTime)
        }
    }

    render () {
        return (
            <div className="timer">
                <span className="countdown" onClick={this.timer}>
                    <h1>TIMERRRR</h1>
                    {this.props.currentTime}
                </span>
                <div>{this.props.cycle}</div>
            </div>
        );
    }
}