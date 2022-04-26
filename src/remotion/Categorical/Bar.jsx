import React             from 'react'
import {useCurrentFrame} from 'remotion';
import {ease}            from '../../functions.ts'

export const Bar = ({x, y, height, color, t0}) => {
	
  const frame  = useCurrentFrame()
  const r      = ease(frame, t0, t0+30)

	return <rect x={x - 75} y={y-height*r} width="150" height={height*r} fill={color}/>

}