import {Arc} from './Arc'
import {useCurrentFrame, interpolate, spring, Easing} from 'remotion'
import React from "react"

const colors = ["rgb(255,80,80)","rgb(255,255,80)","rgb(255,80,255)","rgb(80,255,80)","rgb(80,255,255)","rgb(0,80,80)","rgb(80,0,80)", "rgb(80,80,0)"]


export const Pie = ({data}) => {

  const frame = useCurrentFrame()

  const r = interpolate(frame, [0, 60], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

  const arcs = getArcsFromData(data.map(a => a.value))

	return (
    <>
      {/* <div style={{fontSize:"8rem", color: "coral"}}>{r}</div> */}
      {arcs.map((arc, i) => {
        return (
          <Arc x={960} y = {540} radius = {300} start = {arc.start*r} end = {arc.end*r} color = {colors[i]} t0={i*7+45} name={data[i].name}/>
        )
      })}
    </>
	)
}

const getSum = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += parseFloat(array[i]);
  }
  return sum
}

const getDistribution = (array) => {
  const sum = getSum(array)
  const distribution = []

  for (let i = 0; i < array.length; i++) {
    const element = parseFloat(array[i]) / sum * 360
    distribution.push(element)
  }
  return distribution
}

const getCumulative = (array) => {
  let result = [array[0]]

  for (let i = 0; i < array.length-1; i++) {

    const element = result[i] + array[i+1]
    result.push(element)
  }
  return result
}

const getArcsFromData = (data) => {

  const distribution = getDistribution(data)         // [1, 1, 2] -> [1,1,2]/(1+1+4)*360 = [90, 90, 180]
  const angles       = getCumulative(distribution)
  angles.unshift(0)

  const arcs = []

  for (let i = 0; i < angles.length-1; i++) {
    const angle = {start:0, end: 0}
    angle.start = angles[i];
    angle.end = angles[i+1];

    arcs.push(angle)
    
  }

  return arcs
}