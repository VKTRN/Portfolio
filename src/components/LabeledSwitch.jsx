import React from 'react'

const LabeledSwitch = ({position, toggle, highlighting}) => {
  return (
    <label className="switch">
      <input onChange={toggle} type="checkbox"/>
      <span className={`slider round ${highlighting}`}>{position}</span>
    </label>
  )
}

export default LabeledSwitch