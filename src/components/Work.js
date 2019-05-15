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
            <div className="work row">
                <h1>WORK TIME</h1>
                <button className="btn btn-info" onClick={this.handleWorkIncrease}>+</button>
                <h1></h1>
                <h1>{this.props.workTime}</h1>
                <button className="btn btn-info" onClick={this.handleWorkDecrease}>-</button>
            </div>
        );
    }
}