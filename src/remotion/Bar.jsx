import {useVideoConfig, useCurrentFrame, interpolate, Easing} from 'remotion';
import React from "react"
import {PieTitle} from './PieTitle'

export const Bar = ({x, y, height, color, t0, name}) => {
	
	const config = useVideoConfig()
  const frame = useCurrentFrame()

  const r = interpolate(frame, [t0, 30+t0], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

	return (
    <>
      <PieTitle start = {{x: x, y:y+50}} t0={t0} name={name}/>
      <svg
        viewBox={`0 0 ${config.width} ${config.height}`}
        fill={color}
        style = {{position: "absolute"}}
      >
        <rect x={x - 75} y={y-height*r} width="150" height={height*r}/>
      </svg>
    </>
	);
};