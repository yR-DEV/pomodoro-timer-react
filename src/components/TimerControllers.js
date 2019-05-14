import React, { Component } from'react';

import Break from './Break';
import Work from './Work';

export default class TimerControllers extends Component {
    render() {
        return (
            <div className="timer-controllers">
                <h1>TIMER CONTROLELRS</h1>
                <Break />
                <Work />
            </div>    
        );
    }
}