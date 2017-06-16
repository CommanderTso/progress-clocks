import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MultiToggle from 'react-multi-toggle'

import './css/new-dialog.css'
import './css/multi-toggle.css'

class NewDialog extends Component {
  constructor(props) {
    super(props)
    
    this.state = 
      { selectedTotalSteps: 4
      , title: 'A new clock...'
      }
    
  }
  
  render = () => {        
    const totalSteps = 
      [ { value: 4, displayName: "Four"}
      , { value: 6, displayName: "Six"}
      , { value: 8, displayName: "Eight"}
      ]
    
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <MultiToggle
            options={totalSteps}
            selectedOption={this.state.selectedTotalSteps}
            onSelectOption={this.onTotalStepsSelect}
            label="Total Clock Steps"/>

          <div className='button-row'>
            <button onClick={this.onClickCreate}>Create</button>
            <button onClick={this.props.closeDialog}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  onTotalStepsSelect = value => {
    console.log(value)
    this.setState({ selectedTotalSteps: value })
  }
  
  onClickCreate = () => {
    this.props.onClickCreate(
      this.state.title,
      this.state.selectedTotalSteps
    )
    this.props.closeDialog()
  }
  
}

NewDialog.propTypes = 
  { closeDialog: PropTypes.func.isRequired
  , onClickCreate: PropTypes.func.isRequired
  }

export default NewDialog
