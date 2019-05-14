import React, { Component } from 'react';
export default class Timer extends Component {
    
    timer = () => {
        // if (this.props.toggleTimer === true) {
            // console.log('FUCK YOU');
            
            clearInterval(this.props.idTime)
            // this.props.setCurrentTime("25 : 00")
            this.props.setToggleTimer()
        // } else {
        //     if(this.props.cycle === "Work") {
        //         this.props.startPomoTimer(this.props.workTime)
        //     } else {
        //         this.props.startPomoTimer(this.props.breakTime)
        //     }
        // }
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