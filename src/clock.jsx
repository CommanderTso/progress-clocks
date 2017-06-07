import React, { Component } from 'react'
import './css/clock.css'
import sixClock from './images/six-clock-empty.svg'

class Clock extends Component {
  render() {
    return (
      <div className="clock">
        <img alt='clock' src={sixClock}></img>
      </div>
    )
  }
}

export default Clock
