import React, { Component } from'react';

import Break from './Break';
import Work from './Work';

export default class TimerControllers extends Component {
    render() {
        return (
            <div className="timer-controllers">
                <Work 
                    workTime={this.props.workTime}
                    increaseWorkTime={this.props.increaseWorkTime}
                    decreaseWorkTime={this.props.decreaseWorkTime}
                />
                <Break 
                    breakTime={this.props.breakTime}
                    increaseBreakTime={this.props.increaseBreakTime}
                    decreaseBreakTime={this.props.decreaseBreakTime}
                />
            </div>    
        );
    }
}