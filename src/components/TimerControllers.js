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
                    setCurrentTime={this.props.setCurrentTime}
                    setToggleTimer={this.props.setToggleTimer}
                />
                <Break 
                    breakTime={this.props.breakTime}
                    increaseBreakTime={this.props.increaseBreakTime}
                    decreaseBreakTime={this.props.decreaseBreakTime}
                    setCurrentTime={this.props.setCurrentTime}
                    setToggleTimer={this.props.setToggleTimer}
                />
            </div>    
        );
    }
}