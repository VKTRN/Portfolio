import {useVideoConfig, useCurrentFrame, interpolate, Easing} from 'remotion';
import React from "react"

export const YAxis = ({position, length, yMax, nthTick, nTicks}) => {

	const config = useVideoConfig()
  const frame = useCurrentFrame()
  const t0 = 3

  const ticks = Array(nTicks).fill(0).map((item,i) => i*500/nTicks)
  console.log(ticks)
  
  const r = interpolate(frame, [0, 40], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

	return (
    <>
      <svg
        viewBox={`0 0 ${config.width} ${config.height}`}
        style = {{position: "absolute"}}
      >
        <line y1={config.height-position.y} 
              x1={position.x} 
              y2={config.height-position.y-length*r} 
              x2={position.x} 
              stroke="black" 
              stroke-width={6}/>
        
        {
          ticks.map((tick, i) => {

            const r = interpolate(frame, [t0*i, 10+t0*i], [0, 1], {
              easing: Easing.bezier(.5, 0, .5, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            })


            return (
              <>
              <line  y1={config.height-position.y - tick} x1={position.x} y2={config.height-position.y - tick} x2={position.x-20*r} stroke="black" stroke-width={4}/>
              {i%nthTick === 0 && <text x={position.x-60} y={config.height-position.y - tick} font-size={40*r} dominantBaseline="middle" textAnchor="middle">{i*yMax/nTicks}</text>}
              </>
            ) 
          })
        }
      </svg>
    </>
	);
};