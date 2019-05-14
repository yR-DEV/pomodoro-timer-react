import React, { Component } from 'react';

export default class Work extends Component {
    handleWorkIncrease = (event) => {
        this.props.increaseWorkTime();
    }

    handleWorkDecrease = (event) => {
        this.props.decreaseWorkTime();
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