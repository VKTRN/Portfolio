import React from 'react'
import {setMode} from '../redux/slice'
import {useDispatch} from "react-redux"

export const ModeSelection = () => {

  const handleSetMode = (mode) => {
    dispatch(setMode(mode))
  }

  const dispatch = useDispatch()

  return (
    <select className='mode-select' name="modes" id="mode-select" onChange={(e) => handleSetMode(e.target.value)}>
      <option value="pie-chart">Pie Chart</option>
      <option value="axis">Graph</option>
      <option value="histogram">Histogram</option>
    </select>
  )
}

export default ModeSelection