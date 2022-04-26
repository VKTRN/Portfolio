import React             from "react"
import {ease}            from '../../functions.ts'
import {useVideoConfig}  from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useSelector}     from 'react-redux'

export const YAxis = () => {

	const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()
  const config      = useSelector(state => state.config)

  const ticks = Array(config.y.nTicks+1).fill(0).map((item,i) => -i*config.height/config.y.nTicks)
  const t0    = 3
  const t     = ease(frame, 0, 40)
  const x0    = config.x.x0
  const y0    = videoConfig.height - config.y.y0
  const y2    = y0 - (config.height+25)*t

	return (
    <>
      <line x1={x0} y1={y0} x2={x0} y2={y2} stroke="black" stroke-width={6}/>
        
      {
        ticks.map((tick,i) => {

          const t         = ease(frame, t0*i, 10+t0*i)
          const y         = y0 + tick
          const x2        = x0 - 20*t
          const isNthTick = i%config.y.nthTick === 0
          const value     = i*config.y.max/config.y.nTicks

          return (
            <>
              <line x1={x0} y1={y} x2={x2} y2={y} stroke="black" stroke-width={4}/>
              {isNthTick && <text x={x0-35} y={y} font-size={40*t} dominantBaseline="middle" textAnchor="end">{value}</text>}
            </>
          )
        })
      }
    </>
	)
}



