import React from 'react'
import '../style/Spinner.css'

const Spinner = (props) => {
  return (
    <div className="Spinner">
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.message}</div>
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'The list is empty',
}

export default Spinner
