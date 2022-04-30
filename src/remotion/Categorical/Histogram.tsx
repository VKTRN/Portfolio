import React                from 'react'
import {useVideoConfig}     from 'remotion'
import {useAppSelector}     from '../../redux/hooks'
import {colors}             from '../../functions'
import {getHeightsFromData} from '../../functions'
import {Bar}                from './Bar'

export const Histogram = () => {

  const config  = useVideoConfig()
  const data    = useAppSelector(state => state.categories)
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