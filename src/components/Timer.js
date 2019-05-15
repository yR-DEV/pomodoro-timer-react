import React, { Component } from 'react';
export default class Timer extends Component {
    
    timer = () => {
        clearInterval(this.props.idTime)
        this.props.setToggleTimer()
    }

    render () {
        return (
            <div className="timer text-center">
                <span className="countdown" onClick={this.timer}>
                    <h1 className="display-3">TIMERRRR (click me)</h1>
                    <div className="current-time">
                        {this.props.currentTime}
                    </div>
                </span>
                <div>{this.props.cycle}</div>
            </div>
        );
    }
}