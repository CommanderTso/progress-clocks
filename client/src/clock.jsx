import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/clock.css'

import fourClockZero from './images/4-clocks/4-clock-0.svg'
import fourClockOne from './images/4-clocks/4-clock-1.svg'
import fourClockTwo from './images/4-clocks/4-clock-2.svg'
import fourClockThree from './images/4-clocks/4-clock-3.svg'
import fourClockFour from './images/4-clocks/4-clock-4.svg'

import sixClockZero from './images/6-clocks/6-clock-0.svg'
import sixClockOne from './images/6-clocks/6-clock-1.svg'
import sixClockTwo from './images/6-clocks/6-clock-2.svg'
import sixClockThree from './images/6-clocks/6-clock-3.svg'
import sixClockFour from './images/6-clocks/6-clock-4.svg'
import sixClockFive from './images/6-clocks/6-clock-5.svg'
import sixClockSix from './images/6-clocks/6-clock-6.svg'

import eightClockZero from './images/8-clocks/8-clock-0.svg'
import eightClockOne from './images/8-clocks/8-clock-1.svg'
import eightClockTwo from './images/8-clocks/8-clock-2.svg'
import eightClockThree from './images/8-clocks/8-clock-3.svg'
import eightClockFour from './images/8-clocks/8-clock-4.svg'
import eightClockFive from './images/8-clocks/8-clock-5.svg'
import eightClockSix from './images/8-clocks/8-clock-6.svg'
import eightClockSeven from './images/8-clocks/8-clock-7.svg'
import eightClockEight from './images/8-clocks/8-clock-8.svg'


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
    let clockLookup = this.state.clockLookup
    let currentStep = this.state.currentStep
    
    return (
      <div className="clock">
        <h3>{this.state.title}</h3>
        <img 
          alt='clock' 
          src={clockLookup[currentStep]}
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
      { "4": fourLookup
      , "6": sixLookup
      , "8": eightLookup
      }
    
    if (isNaN(totalSteps) === true)
      totalSteps = parseInt(totalSteps, 10)
    
    return lookups[totalSteps]
  }
}
  
var fourLookup = 
  [ fourClockZero
  , fourClockOne
  , fourClockTwo
  , fourClockThree
  , fourClockFour
  ]
  
var sixLookup = 
  [ sixClockZero
  , sixClockOne
  , sixClockTwo
  , sixClockThree
  , sixClockFour
  , sixClockFive
  , sixClockSix
  ]

var eightLookup = 
  [ eightClockZero
  , eightClockOne
  , eightClockTwo
  , eightClockThree
  , eightClockFour
  , eightClockFive
  , eightClockSix
  , eightClockSeven
  , eightClockEight
  ]

Clock.propTypes = 
  { title: PropTypes.string.isRequired
  , totalSteps: PropTypes.number.isRequired
  , currentStep: PropTypes.number.isRequired
  }

export default Clock
