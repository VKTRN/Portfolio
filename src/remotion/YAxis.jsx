import {useVideoConfig, useCurrentFrame, interpolate, Easing} from 'remotion';
import React from "react"

export const YAxis = ({position, dx, length}) => {

	const config = useVideoConfig()

  const ticks = Array(Math.floor(length/dx)).fill(0).map((item,i) => i*dx)
  

  console.log(ticks)

	return (
    <>
      <svg
        viewBox={`0 0 ${config.width} ${config.height}`}
        style = {{position: "absolute"}}
      >
        <line y1={config.height-position.y} 
              x1={position.x} 
              y2={config.height-position.y-length} 
              x2={position.x} 
              stroke="black" 
              stroke-width={6}/>
        
        {
          ticks.map((tick, i) => {
            return (
              <>
              <line  y1={config.height-position.y - tick} x1={position.x} y2={config.height-position.y - tick} x2={position.x-20} stroke="black" stroke-width={4}/>
              {i%1 === 0 && <text x={position.x-60} y={config.height-position.y - tick} font-size="40" dominantBaseline="middle" textAnchor="middle">{tick}</text>}
              </>
            ) 
          })
        }
      </svg>
    </>
	);
};