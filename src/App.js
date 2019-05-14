import React, { Component } from 'react';

import './App.css';
import Timer from './components/Timer';
import TimerControllers from './components/TimerControllers'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      idTime: 0,
      toggleTimer: false,
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      currentTime: "25 : 00"
    }
  }

  startPomoTimer = () => {
    // console.log('we are in start timer', timerLength);
    console.log('toggle timer');
    
  }

  setCurrentTime = (amountOfTime) => {
    this.state.currentTime = amountOfTime
    console.log(amountOfTime);
  }

  setToggleTimer = (time) => {
    console.log(this.state.toggleTimer);
    if (this.state.toggleTimer === false) {
      this.state.toggleTimer = true
    } else {
      this.state.toggleTimer = false;
    }
  }

  increaseWorkTime = () => {
    this.setState({
      workTime: this.state.workTime += 1
    })
    this.setCurrentTime(this.state.workTime)
  }

  decreaseWorkTime = () => {
    this.setState({
      workTime: this.state.workTime -= 1
    })
    this.setCurrentTime(this.state.workTime)
  }

  increaseBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime += 1
    })
    this.setCurrentTime(this.state.breakTime)
  }

  decreaseBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime -= 1
    })
    this.setCurrentTime(this.state.breakTime)
  }

  render () {
    return (
      <div className="app-main">
        <h1>P O M O - T I M 3 R</h1>
        <Timer 
          toggleTimer={this.state.toggleTimer}
          startPomoTimer={this.startPomoTimer}
          currentTime={this.state.currentTime}
          setCurrentTime={this.setCurrentTime}
          setToggleTimer={this.setToggleTimer}
        />
        <TimerControllers 
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          increaseBreakTime={this.increaseBreakTime}
          decreaseBreakTime={this.decreaseBreakTime}
          setCurrentTime={this.setCurrentTime}
          setToggleTimer={this.setToggleTimer}
        />
      </div>
    );
  }
}

