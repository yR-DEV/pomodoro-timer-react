import React, { Component } from 'react';

export default class Timer extends Component {
    
    timer = () => {
        console.log('inside timer component');
        this.props.startPomoTimer()
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