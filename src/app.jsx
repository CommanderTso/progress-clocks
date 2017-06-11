import React, { Component } from 'react'
import './css/app.css'
import logo from './images/old-clock.svg'

import Clock from './clock.jsx'
import Button from './button.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {clocks: []}
    
    this.onNewClockClick = this.onNewClockClick.bind(this)
  }
  
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="header-text">Progress Clocks</span>
        </div>
        <div>
          <Button
            label={'New Clock'}
            onClick={this.onNewClockClick}/>
        </div>
        <div className="clocks">
          <Clock 
            title="The Riots Spread" 
            totalSteps={6}
            currentStep={0}/>
        </div>
        { this.state.clocks.map(clock => 
            <Clock
              title={clock.title}
              totalSteps={clock.totalSteps}
              currentSteps={clock.currentSteps}/>
          )
        }
      </div>
    );
  }
  
  onNewClockClick() {
  }
}


export default App
