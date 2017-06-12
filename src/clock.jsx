import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/clock.css'

import sixClockEmpty from './images/six-clock-0.svg'
import sixClockOne from './images/six-clock-1.svg'
import sixClockTwo from './images/six-clock-2.svg'
import sixClockThree from './images/six-clock-3.svg'

class Clock extends Component {
  constructor(props) {
    super(props)
    
    this.state = 
      { currentStep: props.currentStep || 0 
      , totalSteps: props.totalSteps || 4
      , title: props.title || 'A New Clock'
      }
    
    this.onClick = this.onClick.bind(this)
    
  }
  
  render() {
    return (
      <div className="clock">
        <h3>{this.state.title}</h3>
        <img 
          alt='clock' 
          src={sixLookup[this.state.currentStep]}
          onClick={this.onClick}>
        </img>
      </div>
    )
  }
  
  onClick() {
    let newCurrentStep = this.state.currentStep < this.state.totalSteps
      ? this.state.currentStep + 1
      : 0
    this.setState({currentStep: newCurrentStep})
  }
}

var sixLookup = 
  [ sixClockEmpty
  , sixClockOne
  , sixClockTwo
  , sixClockThree
  , sixClockEmpty
  , sixClockEmpty
  , sixClockEmpty
  ]

Clock.propTypes = 
  { title: PropTypes.string.isRequired
  , totalSteps: PropTypes.number.isRequired
  , currentStep: PropTypes.number.isRequired
  }

export default Clock
