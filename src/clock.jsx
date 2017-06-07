import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

Clock.propTypes = 
  { title: PropTypes.string
  , size: PropTypes.number
  }

export default Clock
