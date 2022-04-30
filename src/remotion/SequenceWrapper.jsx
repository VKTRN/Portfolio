import React  					from "react"
import {Sequence} 			from 'remotion'
import {useVideoConfig} from 'remotion'
import {useSelector}    from 'react-redux'
import {Pie}            from './Categorical/Pie.tsx'
import {Histogram}    	from './Categorical/Histogram'
import {Plot}    				from './Numerical/Plot'

export const SequenceWrapper = () => {

	const videoConfig = useVideoConfig()
  const mode        = useSelector(state => state.mode)

	return (
			<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
				<svg viewBox={`0 0 1920 1080`} style={{position: "absolute", backgroundColor: 'white'}}>
					{mode === 'axis'      && <Plot/>}
					{mode === 'histogram' && <Histogram/>}
					{mode === "pie-chart" && <Pie/>}
				</svg>
			</Sequence>
	)
}