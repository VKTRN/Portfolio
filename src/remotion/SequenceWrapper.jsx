import React  										from "react"
import {Sequence, useVideoConfig} from 'remotion';
import {Pie}                      from './Pie'
import {Histogram}    					  from './Histogram';
import {Plot}    					        from './Plot';

export const SequenceWrapper = ({state, mode}) => {

	const videoConfig     = useVideoConfig()

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					{mode === 'axis'      && <Plot      data={state.data} config={state.graphConfig} />}
					{mode === "pie-chart" && <Pie       data={state.data}/>}
					{mode === 'histogram' && <Histogram data={state.data}/>}
				</Sequence>
			</div>
		</div>
	)
}