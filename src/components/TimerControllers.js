import React, { Component } from'react';

import Break from './Break';
import Work from './Work';

export default class TimerControllers extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Work 
                        workTime={this.props.workTime}
                        toggleTimer={this.props.toggleTimer}
                        setCurrentTime={this.props.setCurrentTime}
                        increaseWorkTime={this.props.increaseWorkTime}
                        decreaseWorkTime={this.props.decreaseWorkTime}
                    />
                </div>
                <div className="row">

                    <Break 
                        breakTime={this.props.breakTime}
                        toggleTimer={this.props.toggleTimer}
                        setCurrentTime={this.props.setCurrentTime}
                        increaseBreakTime={this.props.increaseBreakTime}
                        decreaseBreakTime={this.props.decreaseBreakTime}
                    />
                </div>  
            </div>  
        );
    }
}