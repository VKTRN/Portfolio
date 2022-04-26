import React                from 'react'
import {useVideoConfig}     from 'remotion'
import {useSelector}        from 'react-redux'
import {colors}             from '../../functions.ts'
import {getHeightsFromData} from '../../functions.ts'
import {Bar}                from './Bar'

export const Histogram = () => {

  const config  = useVideoConfig()
  const data    = useSelector(state => state.categories)
  const heights = getHeightsFromData(data.map(a => a.value), 700)

	return (
    <>
      {heights.map((height, i) =>
        {
 
          const x     = config.width/2-(heights.length-1)*250/2 + i*250   
          const y     = config.height - 200
          const color = colors[i]
          const t0    = i*7

          return <Bar x={x} y={y} height={height} color={color} t0={t0}></Bar>
        }
      )}
    </>
	)
}