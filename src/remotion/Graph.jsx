import {Bar} from './Bar'
import {useCurrentFrame, interpolate, spring, Easing, useVideoConfig} from 'remotion'
import React from "react"
import {XAxis} from './XAxis'
import {YAxis} from './YAxis'
const colors = ["rgb(255,80,80)","rgb(255,255,80)","rgb(255,80,255)","rgb(80,255,80)","rgb(80,255,255)","rgb(0,80,80)","rgb(80,0,80)", "rgb(80,80,0)"]


export const Graph = ({data}) => {

  const config = useVideoConfig()
  console.log(dataToPath(data, 200, 200, 100, 2))

  const cx = 100
  const cy = 3
  const dx = 200
  const dy = 200

	return (
    <>
      <XAxis position = {{x: 200, y:200}} length = {1600} dx={100}/>
      {/* <YAxis position = {{x: 200, y:200}} length = {600} dx={100}/> */}
      {/* <div style={{fontSize:"1rem", color: "coral"}}>{JSON.stringify([data, mode])}</div> */}

      <svg viewBox={`0 0 ${config.width} ${config.height}`} style = {{position: "absolute"}}>
        
      <path stroke="black" stroke-width="3" fill="none" d={dataToPath(data, dx, dy, cx, cy)} />
        
        {data.map((item, i) => {
          return (
            <circle cx={i*cx+dx} cy={1080 - item.y*cy - dy} r="5"/>
          )})}
      </svg>
    </>
	)
}

const getHeightsFromData = (data, maxHeight) => {

  const maxValue = Math.max(...data)
  
  const heights = data.map((value) => value/maxValue*maxHeight)


  return heights
}

const dataToPath = (data, x0, y0, cx, cy) => {
  let path = `M ${+x0} ${1080-y0}`

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const string = `L ${item.x*cx+x0} ${1080-item.y*cy-y0}`
    path += string
  }
  return path
}