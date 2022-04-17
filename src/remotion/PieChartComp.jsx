import {Sequence, useVideoConfig} from 'remotion';
import {Pie} from './Pie'
import React from "react"
import { Histogram } from './Histogram';
import { Circle } from './Circle';

const modes = {'pie-chart': Pie, 'histogram': Histogram}

export const PieChartComp = ({data, mode}) => {

	const videoConfig     = useVideoConfig()

	return (
		<div style={{flex: 1, backgroundColor: '#bfe0de'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					{mode === 'pie-chart' && <Pie data = {data}/>}
					{mode === 'histogram' && <Histogram data = {data}/>}
					{mode === 'circle' && <Circle/>}
				</Sequence>
			</div>
		</div>
	)
}