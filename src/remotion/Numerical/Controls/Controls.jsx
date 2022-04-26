import React from 'react'
import {Wrapper, Config} from './Controls.styles'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {setConfig} from '../../../redux/slice'

export const Controls = () => {

  const ConfigLine = ({name, value, direction, property}) => {

    const changeConfig = (e, direction, c) => {
      const value             = parseInt(e.target.value)
      const newConfig =  JSON.parse(JSON.stringify(config)) // deep clone
      newConfig[direction][c] = value
      dispatch(setConfig(newConfig))
    }
  
    return(
      <Config>
        <span>{name}</span>
        <input type="number" value={value} onChange = {(e) => changeConfig(e, direction,property)}/> 
    </Config>
    )
  }

  const config = useSelector(state => state.config)
  const dispatch = useDispatch()

  return(
    <Wrapper>
      <ConfigLine name = "x-max"   value = {config.x.max}     direction = 'x' property = 'max'/>
      <ConfigLine name = "nthTick" value = {config.x.nthTick} direction = 'x' property = 'nthTick'/>
      <ConfigLine name = "nTicks"  value = {config.x.nTicks}  direction = 'x' property = 'nTicks'/>
      <ConfigLine name = "y-max"   value = {config.y.max}     direction = 'y' property = 'max'/>
      <ConfigLine name = "nthTick" value = {config.y.nthTick} direction = 'y' property = 'nthTick'/>
      <ConfigLine name = "nTicks"  value = {config.y.nTicks}  direction = 'y' property = 'nTicks'/>
		</Wrapper> 
  )
}