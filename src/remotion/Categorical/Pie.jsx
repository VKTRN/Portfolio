import React             from "react"
import {useSelector}     from "react-redux"
import {useCurrentFrame} from 'remotion'
import {ease}            from '../../functions.ts'
import {getArcsFromData} from '../../functions.ts'
import {colors}          from '../../functions.ts'
import {Arc}             from './Arc.tsx'

export const Pie = () => {

  const frame = useCurrentFrame()
  const data  = useSelector(state => state.categories)
  const arcs  = getArcsFromData(data.map(a => a.value))
  const t     = ease(frame, 0, 60)

	return (
    <>
      {arcs.map((arc, i) => 
          <Arc x={960} y = {540} radius = {300} start = {arc.start*t} end = {arc.end*t} color = {colors[i]} t0={i*7+45} name={data[i].name}/>
      )}
    </>
	)
}

