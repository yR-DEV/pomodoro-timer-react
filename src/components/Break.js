import React, { Component } from 'react';

export default class Break extends Component {

    handleBreakIncrease = (event) => {
        this.props.increaseBreakTime();
        if (this.props.toggleTimer === false) {
            this.props.setCurrentTime(this.props.breakTime)
        }
    }

    handleBreakDecrease = (event) => {
        this.props.decreaseBreakTime();
        if (this.props.toggleTimer === false) {
            this.props.setCurrentTime(this.props.breakTime)
        }
    }

    render() {
        return (
            <div className="break">
                <button onClick={this.handleBreakIncrease}>+</button>
                <h1>{this.props.breakTime}</h1>
                <button onClick={this.handleBreakDecrease}>-</button>
            </div>
        );
    }
}