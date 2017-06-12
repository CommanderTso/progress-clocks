import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/clock.css'

import fourClockZero from './images/4-clocks/4-clock-0.svg'

import sixClockZero from './images/6-clocks/6-clock-0.svg'
import sixClockOne from './images/6-clocks/6-clock-1.svg'
import sixClockTwo from './images/6-clocks/6-clock-2.svg'
import sixClockThree from './images/6-clocks/6-clock-3.svg'
import sixClockFour from './images/6-clocks/6-clock-4.svg'
import sixClockFive from './images/6-clocks/6-clock-5.svg'
import sixClockSix from './images/6-clocks/6-clock-6.svg'


class Clock extends Component {
  constructor(props) {
    super(props)
    
    this.state = 
      { currentStep: props.currentStep || 0 
      , totalSteps: props.totalSteps || 4
      , title: props.title || 'A New Clock'
      , clockLookup: this.setClockLookup(props.totalSteps) || fourLookup
      }
    
    this.onClick = this.onClick.bind(this)
    this.setClockLookup = this.setClockLookup.bind(this)
    
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
  
  setClockLookup(totalSteps) {
    let lookups = 
      [ fourLookup
      , sixLookup
      // , eightLookup
      ]
    
    if (isNaN(totalSteps) === true)
      totalSteps = parseInt(totalSteps, 10)
    
    return lookups[totalSteps]
  }
}

var sixLookup = 
  [ sixClockZero
  , sixClockOne
  , sixClockTwo
  , sixClockThree
  , sixClockFour
  , sixClockFive
  , sixClockSix
  ]
  
var fourLookup = 
  [ fourClockZero
  , fourClockZero
  , fourClockZero
  , fourClockZero
  , fourClockZero
  // , fourClockOne
  // , fourClockTwo
  // , fourClockThree
  // , fourClockFour
  ]

Clock.propTypes = 
  { title: PropTypes.string.isRequired
  , totalSteps: PropTypes.number.isRequired
  , currentStep: PropTypes.number.isRequired
  }

export default Clock
