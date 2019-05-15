import React, { Component } from 'react';

import './App.css';
import Timer from './components/Timer';
import TimerControllers from './components/TimerControllers'
import TodoForm from './components/TodoForm'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      idTime: 0,
      toggleTimer: false,
      cycle: "Work",
      workTime: 25,
      breakTime: 5,
      currentTime: 25,
      todos: []
    }
  }

  startPomoTimer = (timerLength) => {
    let time = timerLength * 60
    clearInterval(this.state.idTime);
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
        toggleTimer: false,
        workTime: 25,
        breakTime: 5
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
    this.setState({ 
      workTime: this.state.workTime + 1,
      currentTime: this.state.workTime + 1,
      cycle: "Work"
     })
  }

  decreaseWorkTime = () => {
    this.setState({ 
      workTime: this.state.workTime - 1,
      currentTime: this.state.workTime - 1,
      cycle: "Work"
     })
  }

  increaseBreakTime = () => {
    this.setState({ 
      breakTime: this.state.breakTime + 1,
      currentTime: this.state.breakTime + 1,
      cycle: "Break"
     })
  }

  decreaseBreakTime = () => {
    this.setState({ 
      breakTime: this.state.breakTime - 1,
      currentTime: this.state.breakTime - 1,
      cycle: "Break"
     })
  }

  addTodo = (todoItem) => {
    console.log(todoItem);
    
  }

  render () {
    return (
      <div className="app-main container">
        <h1 className="display-1 text-center">P O M O - T I M 3 R</h1>
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
        <TodoForm 
          addTodo={this.addTodo}
        />
    </div>  
    );
  }
}

