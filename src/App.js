import React, { Component } from 'react'
import './css/App.css'
import logo from './images/old-clock.svg'
import Clock from './clock.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="header-text">Progress Clocks</span>
        </div>
        <p className="clocks">
          
        </p>
      </div>
    );
  }
}

export default App
