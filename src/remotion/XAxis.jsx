import {useVideoConfig, useCurrentFrame, interpolate, Easing} from 'remotion';
import React from "react"

export const XAxis = ({position, length, xMax, nthTick, nTicks}) => {

	const config = useVideoConfig()
  const frame = useCurrentFrame()

  const t0 = 2

  const ticks = Array(nTicks+1).fill(0).map((item,i) => i*1600/nTicks)


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
        <line x1={position.x} y1={config.height - position.y} x2={position.x + length*r} y2={config.height - position.y} stroke="black" stroke-width={6}/>
        
        {
          ticks.map((tick,i) => {

            const r = interpolate(frame, [t0*i, 10+t0*i], [0, 1], {
              easing: Easing.bezier(.5, 0, .5, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            })


            return (
              <>
                <line x1={position.x+tick} y1={config.height - position.y} x2={position.x + tick} y2={config.height - position.y+20*r} stroke="black" stroke-width={4}/>
                {i%nthTick === 0 && <text x={position.x+tick} y={config.height - position.y + 50} font-size={40*r} dominantBaseline="middle" textAnchor="middle">{i*xMax/nTicks}</text>}
              </>
            )
          })
        }
      </svg>
    </>
	);
};