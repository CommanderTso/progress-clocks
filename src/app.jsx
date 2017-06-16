import React, { Component } from 'react'
import './css/app.css'
import logo from './images/logo-clock.svg'

import Clock from './clock.jsx'
import Button from './button.jsx'
import NewDialog from './new-dialog.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = 
      { clocks: []
      , showNewDialog: false
      }
  }
  
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="header-text">Progress Clocks</span>
        </div>
        <div>
          { this.state.showNewDialog
            ? <NewDialog
                closeDialog={this.toggleNewModal}
                onClickCreate={this.createNewClock}/>
            : false
          }
          <Button
            label={'New Clock'}
            onClick={this.toggleNewModal}/>
        </div>
        <div className="clocks">
          { this.state.clocks.map((clock, index) => 
              <Clock
                key={'clock_' + index}
                title={clock.title}
                totalSteps={clock.totalSteps}
                currentStep={clock.currentStep}/>
            )
          }
        </div>
      </div>
    )
  }
  
  toggleNewModal = () => {
    this.setState(
      { showNewDialog: !this.state.showNewDialog }
    )
  }
  
  onNewClockClick = () => {
    this.setState({ showNewDialog: true })
  }
  
  createNewClock = (title, totalSteps) => {
    let newClocks = this.state.clocks
    
    newClocks.push(
      { title: title || 'A New Clock'
      , totalSteps: totalSteps || 4
      , currentStep: 0
      }
    )
    this.setState({clocks: newClocks})
  }
}


export default App
