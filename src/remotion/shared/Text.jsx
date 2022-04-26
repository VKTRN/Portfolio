import React             from 'react'
import {useCurrentFrame} from 'remotion'

export const Text = ({start, t0, name}) => {
	
  const frame = useCurrentFrame()
  const r     = ease(frame, t0, t0+10)

	return <text  x={start.x} y={start.y} dominantBaseline="middle" textAnchor="middle" fill = "black">{name}</text>
	
}