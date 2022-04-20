import {Sequence, useVideoConfig} from 'remotion';
import {Pie} from './Pie'
import React from "react"
import { Histogram } from './Histogram';
import {XAxis} from './XAxis'
import {YAxis} from './YAxis'
import {Graph} from './Graph'


export const PieChartComp = ({data, mode, xMax, nthTick,nTicks, yMax, nthYTick,nYTicks}) => {

	const videoConfig     = useVideoConfig()

	return (
		<div style={{flex: 1, backgroundColor: '#bfe0de'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					{mode === 'axis' && <Graph data = {data} xMax={xMax} nthTick={nthTick} nTicks = {nTicks}
																									 yMax={yMax} nthYTick={nthYTick} nYTicks = {nYTicks}/>}
					{mode === 'pie-chart' && <Pie data = {data}/>}
					{mode === 'histogram' && <Histogram data = {data}/>}
				</Sequence>
			</div>
		</div>
	)
}