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
      cycle: "Work",
      workTime: 25,
      breakTime: 5,
      currentTime: 25
    }
  }

  startPomoTimer = (timerLength) => {
    let time = timerLength * 60
    let runningTimer = setInterval(() => {
      time -= 1
      this.setState({ 
        currentTime: `${time}`,
        idTimer: runningTimer 
      })
      if (time === 0) {
        this.setState({ 
          toggleTimer: false,
         })
      }
    }, 1000)
  }

  setCurrentTime = (amountOfTime) => {
    console.log(amountOfTime);
    this.setState({ currentTime: `${amountOfTime}` })
  }

  setToggleTimer = () => {
    if (this.state.toggleTimer) {
      clearInterval(this.state.idTimer)
      this.setState({
        currentTime: 25,
        toggleTimer: false
      })
    } else {
      this.setState({ toggleTimer: true })
      if (this.state.cycle === "Work"){
        this.startPomoTimer(this.state.workTime)
      } else if (this.state.cycle === "Break") {
        this.startPomoTimer(this.state.breakTime)
      }  
    }
  }

  increaseWorkTime = () => {
    this.setState({ workTime: this.state.workTime += 1 })
    this.setCurrentTime(this.state.workTime)
    this.setState({ cycle: "Work" })
  }

  decreaseWorkTime = () => {
    this.setState({ workTime: this.state.workTime -= 1 })
    this.setCurrentTime(this.state.workTime)
    this.setState({ cycle: "Work" })
  }

  increaseBreakTime = () => {
    this.setState({ breakTime: (this.state.breakTime += 1) })
    this.setCurrentTime(this.state.breakTime)
    this.setState({ cycle: "Break" })

  }

  decreaseBreakTime = () => {
    this.setState({ breakTime: this.state.breakTime -= 1 })
    this.setCurrentTime(this.state.breakTime)
    this.setState({ cycle: "Break" })

  }

  render () {
    return (
      <div className="app-main">
        <h1>P O M O - T I M 3 R</h1>
        <Timer
          cycle={this.state.cycle} 
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          toggleTimer={this.state.toggleTimer}
          startPomoTimer={this.startPomoTimer}
          currentTime={this.state.currentTime}
          setCurrentTime={this.setCurrentTime}
          setToggleTimer={this.setToggleTimer}
        />
        <TimerControllers 
          toggleTimer={this.state.toggleTimer}
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          setCurrentTime={this.setCurrentTime}
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          increaseBreakTime={this.increaseBreakTime}
          decreaseBreakTime={this.decreaseBreakTime}
        />
      </div>
    );
  }
}

