import React from 'react';
import { Player } from "@remotion/player";
import { PieChartComp } from "../remotion/PieChartComp";
import { HistogramComp } from "../remotion/HistogramComp";
import {useState} from 'react'
import axios from 'axios'
import {ModeSelection} from '../components/ModeSelection'
import {TopBar} from './VideoEditor.styles'
import {Categorical} from '../remotion/Categorical/Categorical'
import {Numerical} from '../remotion/Numerical/Numerical'

export const VideoEditor = () => {

  const [mode, setMode]               = useState("pie-chart")
  const [body, setBody]               = useState()

  const [categories, setCategories]   = useState([{name: "text", value: 5}, {name: "text", value: 5}, {name: "text", value: 5}]);
  const [graphData, setGraphData]     = useState(makeGraphData())
  const ranges                        = getRanges(graphData)
  const [xMax, setxMax]               = useState(ranges.x.max)
  const [nthTick, setNthTick]         = useState(ranges.x.nthTick)
  const [nTicks, setNTicks]           = useState(ranges.x.nTicks)
  const [yMax, setyMax]               = useState(ranges.y.max)
  const [nthYTick, setNthYTick]       = useState(ranges.y.nthTick)
  const [nYTicks, setNYTicks]         = useState(ranges.y.nTicks)

  return (
    <>
      <TopBar>
        <ModeSelection setMode={setMode}/>
      </TopBar>
      {mode === "pie-chart" && <Categorical mode = {mode}/>}
      {mode === "histogram" && <Categorical mode = {mode}/>}
      {mode === "axis"      && <Numerical   mode = {mode}/>}
    </>
  )
}

export default VideoEditor;

const makeGraphData = () => {
  const data = []
  for (let i = 0; i < 16; i++) {
    data.push({x:.9*i, y:3*(i)*(i)})
  }
  return data
}

const getRanges = (data) => {
  const X = data.map((item) => item.x)
  const Y = data.map((item) => item.y)
  
  const xMin     = Math.min(...X)
  const yMin     = Math.min(...Y)
  const xMax     = roundValue(Math.max(...X)/20)*20
  const yMax     = Math.max(...Y)
  const nTicksX  = 20
  const nTicksY  = 10
  const nthTickX = 2
  const nthTickY = 2

  const ranges = {
    x:{min:xMin, max:xMax,nTicks:nTicksX, nthTick:nthTickX},
    y:{min:yMin, max:yMax,nTicks:nTicksY, nthTick:nthTickY},
  }

  return ranges

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