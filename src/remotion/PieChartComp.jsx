import {Sequence, useVideoConfig} from 'remotion';
import {Pie} from './Pie'
import React from "react"

export const PieChartComp = ({data}) => {

	const videoConfig     = useVideoConfig()

	return (
		<div style={{flex: 1, backgroundColor: '#bfe0de'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Pie data={data}/>
				</Sequence>
			</div>
		</div>
	)
}