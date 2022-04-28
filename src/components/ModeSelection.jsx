import React         from 'react'
import {useDispatch} from 'react-redux'
import {setMode}     from '../redux/slice'

export const ModeSelection = () => {

  const handleSetMode = (mode) => {
    dispatch(setMode(mode))
  }

  const dispatch = useDispatch()

  return (
    <select className='mode-select' name="modes" id="mode-select" onChange={(e) => handleSetMode(e.target.value)}>
      <option value="pie-chart" >Pie Chart</option>
      <option value="axis"      >Graph</option>
      <option value="histogram" >Histogram</option>
    </select>
  )
}

export default ModeSelection