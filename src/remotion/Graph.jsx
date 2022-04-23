import {Bar} from './Bar'
import {useCurrentFrame, interpolate, spring, Easing, useVideoConfig} from 'remotion'
import React from "react"
import {XAxis} from './XAxis'
import {YAxis} from './YAxis'
const colors = ["rgb(255,80,80)","rgb(255,255,80)","rgb(255,80,255)","rgb(80,255,80)","rgb(80,255,255)","rgb(0,80,80)","rgb(80,0,80)", "rgb(80,80,0)"]


export const Graph = ({data,config}) => {

  const videoConfig = useVideoConfig()
  const frame = useCurrentFrame()

  const pixelsPerXUnit = 1600/config.x.max
  const pixelsPerYUnit = 600/config.y.max
  const x0 = 200
  const y0 = 200

	return (
    <>
      <XAxis position = {{x: 200, y:200}} length = {1600}  xMax={config.x.max} nthTick={config.x.nthTick} nTicks = {config.x.nTicks}/>
      <YAxis position = {{x: 200, y:200}} length = {600}   yMax={config.y.max} nthTick={config.y.nthTick} nTicks = {config.y.nTicks}/>
      {/* <div style={{fontSize:"1rem", color: "coral"}}>{JSON.stringify([data, mode])}</div> */}

      <svg viewBox={`0 0 ${videoConfig.width} ${videoConfig.height}`} style = {{position: "absolute"}}>
        
      {/* <path stroke="black" stroke-width="3" fill="none" d={dataToPath(data, dx, dy, cx, cy,r)} /> */}
        
        {data.map((item, i) => {

          const r = interpolate(frame, [i*3+25, i*3+2+25], [0, 1], {
            easing: Easing.bezier(.5, 0, .5, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
          })

          return (
            <>
              <circle cx={item.x*pixelsPerXUnit+x0} cy={1080 - item.y*pixelsPerYUnit - y0} r={8*r}/>
              { i < data.length-1 && <line x1={item.x*pixelsPerXUnit+x0} y1={1080 - item.y*pixelsPerYUnit - y0} x2={(item.x+r*(data[i+1].x-data[i].x))*pixelsPerXUnit+x0} y2={1080 - item.y*pixelsPerYUnit - y0+pixelsPerYUnit*(data[i].y - data[i+1].y)*r} stroke="black" />}
            </>
          )})}
      </svg>
    </>
	)
}

const getHeightsFromData = (data, maxHeight) => {

  const maxValue = Math.max(...data)
  const heights  = data.map((value) => value/maxValue*maxHeight)

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


const roundValue = (n) => {
  
  function f1(v) {
    return Math.pow(10, Math.floor(Math.log10(v)));
  }
  
  const getRounded = (num) => {
    let value
    if (num < 3){
      value = 0
    }
    else if(num < 8){
      value = 5
    }
    else{
      value=10
    }
    return value
  }

  let result
  const p = f1(n)
  const c = parseInt(n/p*10)
  const d = Math.floor(c/10)*10
  const l = parseInt(c-d)
  if(d >= 80){
    result = 100
  }
  else{
    const o = getRounded(l)
    result = d+o
  }
  result = result *p/10
  return result
}