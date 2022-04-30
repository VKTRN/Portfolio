import React             from "react"
import {ease}            from '../../functions.ts'
import {useVideoConfig}  from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useSelector}     from 'react-redux'

export const YAxis = () => {

	const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()
  const config      = useSelector(state => state.config)

  const dx = config.x.x0
  const xmin = config.x.min
  const xmax = config.x.max
  const xTicks = config.x.nTicks
  const nthTickx = config.x.nthTick
  const width = config.x.length

  const dy = config.y.y0
  const ymin = config.y.min
  const ymax = config.y.max
  const yTicks = config.y.nTicks
  const nthTicky = config.y.nthTick
  const height = config.y.length
  const zeroWithinXRange = xmin < 0 && xmax > 0

  const ticks  = Array(yTicks+1).fill(0).map((item,i) => -i*height*10.80/yTicks)
  const t0     = 3
  const t      = ease(frame, 0, 40)
  const ppx    = width*19.20/(xmax - xmin)
  // const x0     = zeroWithinXRange? dx*19.2 - ppx*xmin : dx*19.2
  // const deltaX = Math.min(Math.abs(ppx*xmin), width*19.20)
  const a = Math.max(xmin*ppx, -width*19.2)
  const deltaX = Math.abs(Math.min(a, 0))
  // const deltaX = Math.abs(Math.min(ppx*xmin, width*19.20))
  console.log(deltaX)
  const x0     = dx*19.2 + deltaX
  const y0     = videoConfig.height - dy*10.8


  const y2    = y0 - (height*10.80)*t

	return (
    <>
      <line x1={x0} y1={y0} x2={x0} y2={y2} stroke="black" stroke-width={6} stroke-linecap="round"/>
        
      {
        ticks.map((tick,i) => {

          const t         = ease(frame, t0*i, 10+t0*i)
          const y         = y0 + tick
          const x2        = x0 - 20*t
          const isNthTick = i%config.y.nthTick === 0
          const value     = i*(config.y.max - config.y.min)/config.y.nTicks + config.y.min

          return (
            <>
              <line x1={x0} y1={y} x2={x2} y2={y} stroke="black" stroke-width={4} stroke-linecap="round"/>
              {isNthTick && <text x={x0-35} y={y} font-size={40*t} dominantBaseline="middle" textAnchor="end">{value}</text>}
            </>
          )
        })
      }
    </>
	)
}



 