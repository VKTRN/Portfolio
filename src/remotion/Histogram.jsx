import {Bar} from './Bar'
import {useCurrentFrame, interpolate, spring, Easing, useVideoConfig} from 'remotion'
import React from "react"

const colors = ["rgb(255,80,80)","rgb(255,255,80)","rgb(255,80,255)","rgb(80,255,80)","rgb(80,255,255)","rgb(0,80,80)","rgb(80,0,80)", "rgb(80,80,0)"]


export const Histogram = ({data}) => {

  const frame = useCurrentFrame()
  const config = useVideoConfig()

  const r = interpolate(frame, [0, 60], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

  const heights = getHeightsFromData(data.map(a => a.value), 700)

	return (
    <>
      {/* <div style={{fontSize:"1rem", color: "coral"}}>{JSON.stringify([data, mode])}</div> */}

      {heights.map((height, i) => {
        return (
					<Bar x={config.width/2-(heights.length-1)*250/2 + i*250} y={config.height-200} height={height} color={colors[i]} t0={i*7} name={data[i].name}></Bar>
        )
      })}
    </>
	)
}

const getHeightsFromData = (data, maxHeight) => {

  const maxValue = Math.max(...data)
  
  const heights = data.map((value) => value/maxValue*maxHeight)


  return heights
}