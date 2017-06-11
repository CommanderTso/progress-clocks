import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/button.css'

class Button extends Component {
  constructor(props) {
    super(props)
    
    this.state = 
      { label: props.label
      , onClick: props.onClick
      }
      
    this.onClick = this.onClick.bind(this)
  }
  
  render() {
    return (
      <button onClick={this.onClick}>
        {this.state.label}
      </button>
    )
  }
  
  onClick() {
    this.props.onClick()
  }
}

Button.propTypes = 
  { label: PropTypes.string.isRequired
  , onClick: PropTypes.func.isRequired
  }

export default Button
