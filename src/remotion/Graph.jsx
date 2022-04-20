import {Bar} from './Bar'
import {useCurrentFrame, interpolate, spring, Easing, useVideoConfig} from 'remotion'
import React from "react"
import {XAxis} from './XAxis'
import {YAxis} from './YAxis'
const colors = ["rgb(255,80,80)","rgb(255,255,80)","rgb(255,80,255)","rgb(80,255,80)","rgb(80,255,255)","rgb(0,80,80)","rgb(80,0,80)", "rgb(80,80,0)"]


export const Graph = ({data,xMax, nthTick, nTicks,yMax, nthYTick, nYTicks}) => {

  const config = useVideoConfig()
  const frame = useCurrentFrame()


  // const r = interpolate(frame, [0, 40], [0, 1], {
  //   easing: Easing.bezier(.5, 0, .5, 1),
  //   extrapolateLeft: "clamp",
  //   extrapolateRight: "clamp"
  // })

  const cx = 1600/xMax
  const cy = 600/yMax
  const dx = 200
  const dy = 200

	return (
    <>
      <XAxis position = {{x: 200, y:200}} length = {1600}  xMax={xMax} nthTick={nthTick} nTicks = {nTicks}/>
      <YAxis position = {{x: 200, y:200}} length = {600} yMax={yMax} nthTick={nthYTick} nTicks = {nYTicks}/>
      {/* <div style={{fontSize:"1rem", color: "coral"}}>{JSON.stringify([data, mode])}</div> */}

      <svg viewBox={`0 0 ${config.width} ${config.height}`} style = {{position: "absolute"}}>
        
      {/* <path stroke="black" stroke-width="3" fill="none" d={dataToPath(data, dx, dy, cx, cy,r)} /> */}
        
        {data.slice(0, -1).map((item, i) => {

          const r = interpolate(frame, [i*3+25, i*3+2+25], [0, 1], {
            easing: Easing.bezier(.5, 0, .5, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
          })

    

          return (
            <>
              <circle cx={i*cx+dx} cy={1080 - item.y*cy - dy} r={8*r}/>
              <line x1={i*cx+dx} y1={1080 - item.y*cy - dy} x2={(i+r)*cx+dx} y2={1080 - item.y*cy - dy+cy*(data[i].y - data[i+1].y)*r} stroke="black" />
            </>
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

const dataToPath = (data, x0, y0, cx, cy,r) => {
  let path = `M ${+x0} ${1080-y0}`

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const string = `L ${item.x*cx+x0} ${1080-item.y*cy*r-y0}`
    path += string
  }
  return path
}