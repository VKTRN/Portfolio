import React             from "react"
import {XAxis}           from './XAxis'
import {YAxis}           from './YAxis'
import {Graph}           from './Graph'

export const Plot = ({data,config}) => {

	return (
    <>
      <XAxis config={config}/>
      <YAxis position = {{x: 200, y:200}} length = {600}   yMax={config.y.max} nthTick={config.y.nthTick} nTicks = {config.y.nTicks}/>
      <Graph data={data} config={config}/>
    </>
	)
}
