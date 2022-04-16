import {Sequence, useVideoConfig} from 'remotion';
import React from "react"
import { Histogram } from './Histogram';

export const HistogramComp = ({data}) => {

	const videoConfig     = useVideoConfig()

	return (
		<div style={{flex: 1, backgroundColor: '#bfe0de'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Histogram data={data}/>
				</Sequence>
			</div>
		</div>
	)
}