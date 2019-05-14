import React, { Component } from 'react';

export default class Work extends Component {
    handleWorkIncrease = (event) => {
        this.props.increaseWorkTime();
        if (this.props.toggleTimer === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }

    handleWorkDecrease = (event) => {
        this.props.decreaseWorkTime();
        if (this.props.toggleTimer === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }

    render() {
        return (
            <div className="work">
                <button onClick={this.handleWorkIncrease}>+</button>
                <h1>{this.props.workTime}</h1>
                <button onClick={this.handleWorkDecrease}>-</button>
            </div>
        );
    }
}