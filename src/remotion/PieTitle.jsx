import {useVideoConfig, useCurrentFrame, interpolate, spring, Easing} from 'remotion';
import React from "react"

export const PieTitle = ({start, t0, name}) => {
	
	const config = useVideoConfig()
  const frame = useCurrentFrame()

  const r = interpolate(frame, [t0, t0+15], [0, 4], {
    easing: Easing.elastic(1.5),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

	return (
		<svg
			viewBox={`0 0 ${config.width} ${config.height}`}
			fill = "black"
      style = {{position: "absolute", fontSize:r+"rem", textAlign:"center"}}
		>
      <text  x={start.x} y={start.y} dominantBaseline="middle" textAnchor="middle" >{name}</text>
      
		</svg>
	);
};