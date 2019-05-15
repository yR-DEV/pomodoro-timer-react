import React, { Component } from 'react';

export default class Break extends Component {

    handleBreakIncrease = (event) => {
        this.props.increaseBreakTime();
    }

    handleBreakDecrease = (event) => {
        this.props.decreaseBreakTime();
    }

    render() {
        return (
            <div className="break row">
                <button className="btn btn-info" onClick={this.handleBreakIncrease}>+</button>
                <h1>{this.props.breakTime}</h1>
                <button className="btn btn-info" onClick={this.handleBreakDecrease}>-</button>
            </div>
        );
    }
}