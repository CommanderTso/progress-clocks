import React, { Component } from 'react'
import './css/App.css'
import logo from './images/old-clock.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="header-text">Progress Clocks</span>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App
