import {useVideoConfig, useCurrentFrame, interpolate, spring, Easing} from 'remotion';
import React from "react"
import {useRef} from 'react'

export const PieTitle = ({start, t0}) => {
	
	const config = useVideoConfig()
  const ref = useRef()

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
      {/* <circle cx={start.x} cy={start.y} r="5"/> */}
      <text ref={ref} x={start.x - ref.current?.getBBox().width/2} y={start.y} >text</text>
		</svg>
	);
};
