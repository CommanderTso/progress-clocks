import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/new-dialog.css'

class NewDialog extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
    
  }
  
  render() {        
    if (!this.props.isOpen) {
      console.log("closed")
      return null
    }
    
    console.log("open")
    return (
      <div className="modal-backdrop">
        <div className="modal">
          {'blah'}

          <div>
            <button onClick={this.props.onClickCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  onClickCreate = () => {
    
  }
}

NewDialog.propTypes = 
  { onClickCancel: PropTypes.func.isRequired
  , isOpen: PropTypes.bool.isRequired
  }

export default NewDialog
