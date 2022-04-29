import React             from "react"
import {ease}            from '../../functions.ts'
import {useVideoConfig}  from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useSelector}     from 'react-redux'

export const XAxis = () => {

	const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()
  const config      = useSelector(state => state.config)

  const ticks = Array(config.x.nTicks+1).fill(0).map((item,i) => i*config.x.length*19.20/config.x.nTicks)
  const t0    = 2
  const t     = ease(frame, 0, 40)
  const ppy   = config.y.length*10.80/(config.y.max - config.y.min)

  const x0    = config.x.x0*19.2
  const y0    = videoConfig.height - config.y.y0*10.8+ ppy * config.y.min

	return (
    <>
      <line x1={x0} y1={y0} x2={x0 + (config.x.length*19.20+25)*t} y2={y0} stroke="black" stroke-width={6}/>
        
      {
        ticks.map((tick,i) => {

          const t         = ease(frame, t0*i, 10+t0*i)
          const x         = x0 + tick
          const y1        = y0 + 20*t
          const isNthTick = i%config.x.nthTick === 0
          const value     = i*(config.x.max - config.x.min)/config.x.nTicks + config.x.min

          return (
            <>
              <line x1={x} y1={y0} x2={x} y2={y1} stroke="black" stroke-width={4}/>
              {isNthTick && <text x={x} y={y0 + 50} font-size={40*t} dominantBaseline="middle" textAnchor="middle">{value}</text>}
            </>
          )
        })
      }
    </>
	)
}



