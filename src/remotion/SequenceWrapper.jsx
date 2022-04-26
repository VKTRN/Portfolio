import React  					from "react"
import {Sequence} 			from 'remotion'
import {useVideoConfig} from 'remotion'
import {useSelector}    from 'react-redux'
import {Pie}            from './Pie'
import {Histogram}    	from './Histogram'
import {Plot}    				from './Plot';

export const SequenceWrapper = () => {

	const videoConfig = useVideoConfig()
  const mode        = useSelector(state => state.mode)

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div >
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					{mode === 'axis'      && <Plot/>}
					{mode === 'histogram' && <Histogram/>}
					{mode === "pie-chart" && <Pie/>}
				</Sequence>
			</div>
		</div>
	)
}