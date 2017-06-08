import React, { Component } from 'react'
import './css/app.css'
import logo from './images/old-clock.svg'
import Clock from './clock.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="header-text">Progress Clocks</span>
        </div>
        <div className="clocks">
          <Clock 
            title="The Riots Spread" 
            totalSteps={6}
            currentStep={0}>
          </Clock>
        </div>
      </div>
    );
  }
}

export default App
