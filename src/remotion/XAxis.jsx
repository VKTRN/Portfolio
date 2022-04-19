import {useVideoConfig, useCurrentFrame, interpolate, Easing} from 'remotion';
import React from "react"

export const XAxis = ({position, dx, length}) => {

	const config = useVideoConfig()

  const ticks = Array(Math.floor(length/dx)).fill(0).map((item,i) => i*dx)

	return (
    <>
      <svg
        viewBox={`0 0 ${config.width} ${config.height}`}
        style = {{position: "absolute"}}
      >
        <line x1={position.x} y1={config.height - position.y} x2={position.x + length} y2={config.height - position.y} stroke="black" stroke-width={6}/>
        
        {
          ticks.map((tick,i) => {
            return (
              <>
                <line x1={position.x+tick} y1={config.height - position.y} x2={position.x + tick} y2={config.height - position.y+20} stroke="black" stroke-width={4}/>
                {i%5 === 0 && <text x={position.x+tick} y={config.height - position.y + 50} font-size="40" dominantBaseline="middle" textAnchor="middle">{tick}</text>}
              </>
            )
          })
        }
      </svg>
    </>
	);
};