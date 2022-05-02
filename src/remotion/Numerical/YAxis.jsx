import React             from "react"
import {ease}            from '../../functions.ts'
import {useVideoConfig}  from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useSelector}     from 'react-redux'

export const YAxis = () => {

  const getXinPx = () => {
    const a      = Math.max(config.x.min*pxPerXunit, -axisWidthInPx)
    const deltaX = Math.abs(Math.min(a, 0))
    const xInPx  = config.x.x0 * videoWidthInPx/100 + deltaX
  
    return xInPx
  }

	const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()
  const config      = useSelector(state => state.config)

  const direction       = config.y.direction
  const nTicks          = config.y.nTicks

  const videoWidthInPx  = videoConfig.width
  const videoHeightInPx = videoConfig.height
  const axisWidthInPx   = config.x.length * videoWidthInPx/100
  const axisHeightInPx  = config.y.length * videoHeightInPx/100


  const ticksInPx     = Array(nTicks+1).fill(0).map((item,i) => i*axisHeightInPx/nTicks)
  const t0            = 2
  const s             = ease(frame, 0, 40)
  const deltaYinUnits = config.y.max - config.y.min
  const deltaXinUnits = config.x.max - config.x.min
  const pxPerXunit    = axisWidthInPx / deltaXinUnits
  
  const yBottomInPx   = videoHeightInPx - config.y.y0*videoHeightInPx/100
  const yTopInPx      = yBottomInPx - axisHeightInPx
  const xInPx         = getXinPx()

  let tickShift
  let deltaTick

  switch (config.x.zeroPosition) {
    case 'inside':
      tickShift = -20
      deltaTick = +10
      break;
    case 'smaller':
      tickShift = -20
      deltaTick = 0
      break;
    case 'bigger':
      tickShift = 20
      deltaTick = 0
      break;
  
    default:
      break;
  }

  const line = {}
  line.start = direction === 'bottomToTop'? yBottomInPx                    : yTopInPx
  line.end   = direction === 'bottomToTop'? yBottomInPx - axisHeightInPx*s : yTopInPx + axisHeightInPx*s

	return (
    <>
      <line x1={xInPx} y1={line.start} x2={xInPx} y2={line.end} stroke="black" stroke-width={6} stroke-linecap={s > 0 && "round"}/>
        
      {
        ticksInPx.map((tickInPx,i) => {

          const s         = ease(frame, t0*i, 10+t0*i)
          const y         = direction === 'bottomToTop'? yBottomInPx - tickInPx : yTopInPx + tickInPx
          
          
          const xStart    = xInPx + deltaTick
          const xTick     = xStart + tickShift*s
          
          const xNumber   = xInPx - 35
          const isNthTick = i%config.y.nthTick === 0
          const value     = direction === 'bottomToTop'? i*deltaYinUnits/nTicks + config.x.min : -i*deltaYinUnits/nTicks + config.y.max

          return (
            <>
              <line x1={xStart} y1={y} x2={xTick} y2={y} stroke="black" stroke-width={4} stroke-linecap={s > 0 && "round"}/>
              {/* {isNthTick && <text x={xNumber} y={y} font-size={40*s} dominantBaseline="middle" textAnchor="end">{value}</text>} */}
            </>
          )
        })
      }
    </>
	)
}



 