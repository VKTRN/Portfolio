import React from 'react'

const LabeledSwitch = ({position, toggle}) => {
  return (
    <label className="switch">
      <input onChange={toggle} type="checkbox"/>
      <span className="slider round">{position}</span>
    </label>
  )
}

export default LabeledSwitch