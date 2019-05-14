import React, { Component } from 'react';

import './App.css';
import Timer from './components/Timer';
import TimerControllers from './components/TimerControllers'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      cycle: "Session",
      workTime: 25,
      breakTime: 5
    }
  }

  increaseWorkTime = () => {
    this.setState({
      workTime: this.state.workTime += 1
    })
  }

  decreaseWorkTime = () => {
    this.setState({
      workTime: this.state.workTime -= 1
    })
  }

  increaseBreakTime = () => {
    console.log('here');
    
    this.setState({
      breakTime: this.state.breakTime += 1
    })
  }

  decreaseBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime -= 1
    })
  }

  render () {
    return (
      <div className="app-main">
        <h1>P O M O - T I M 3 R</h1>
        <Timer />
        <TimerControllers 
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          increaseBreakTime={this.increaseBreakTime}
          decreaseBreakTime={this.decreaseBreakTime}
        />
      </div>
    );
  }
}

