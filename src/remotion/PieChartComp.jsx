import React  										from "react"
import {Sequence, useVideoConfig} from 'remotion';
import {Pie}                      from './Pie'
import {Histogram}    					  from './Histogram';
import {Graph}    					      from './Graph';

export const PieChartComp = ({state, mode}) => {

	const videoConfig     = useVideoConfig()
	console.log(mode)
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					{mode === 'axis'      && <Graph     data={state.data} config={state.graphConfig} />}
					{mode === "pie-chart" && <Pie       data={state.data}/>}
					{mode === 'histogram' && <Histogram data={state.data}/>}
				</Sequence>
			</div>
		</div>
	)
}