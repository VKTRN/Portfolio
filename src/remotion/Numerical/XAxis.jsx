import React             from "react"
import {ease}            from '../../functions.ts'
import {useVideoConfig}  from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useSelector}     from 'react-redux'

export const XAxis = () => {

  const getYinPx = () => {
    const a      = Math.max(config.y.min*pxPerYunit, -axisHeightInPx)
    const deltaY = Math.abs(Math.min(a, 0))
    const yInPx  = videoHeightInPx-config.y.y0 * videoHeightInPx/100 - deltaY
  
    return yInPx
  }

	const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()
  const config      = useSelector(state => state.config)

  const direction       = config.x.direction
  const nTicks          = config.x.nTicks

  const videoWidthInPx  = videoConfig.width
  const videoHeightInPx = videoConfig.height
  const axisWidthInPx   = config.x.length * videoWidthInPx/100
  const axisHeightInPx  = config.y.length * videoHeightInPx/100

  const ticksInPx     = Array(nTicks+1).fill(0).map((item,i) => i*axisWidthInPx/nTicks)
  const t0            = 2
  const s             = ease(frame, 0, 40)
  const deltaYinUnits = config.y.max - config.y.min
  const deltaXinUnits = config.x.max - config.x.min
  const pxPerYunit    = axisHeightInPx / deltaYinUnits
  
  const xLeftInPx   = config.x.x0*19.2
  const xRightInPx  = xLeftInPx + axisWidthInPx
  const yInPx       = getYinPx()

  let tickShift
  let deltaTick

  switch (config.y.zeroPosition) {
    case 'inside':
      tickShift = -20
      deltaTick = +10
      break;
    case 'smaller':
      tickShift = 20
      deltaTick = 0
      break;
    case 'bigger':
      tickShift = -20
      deltaTick = 0
      break;
  
    default:
      break;
  }


  const line = {}
  line.start = direction === 'leftToRight'? xLeftInPx                   : xRightInPx
  line.end   = direction === 'leftToRight'? xLeftInPx + axisWidthInPx*s : xRightInPx - axisWidthInPx*s

	return (
    <>
      <line x1={line.start} y1={yInPx} x2={line.end} y2={yInPx} stroke="black" stroke-width={6} stroke-linecap={s > 0 && "round"}/>
        
      {
        ticksInPx.map((tickInPx,i) => {

          const s         = ease(frame, t0*i, 10+t0*i)
          const x         = direction === 'leftToRight'? xLeftInPx + tickInPx : xRightInPx - tickInPx

          const yStart    = yInPx + deltaTick
          const yTick     = yStart + tickShift*s
          const yNumber   = yInPx + 50
          const isNthTick = i%config.x.nthTick === 0
          const value     =  direction === 'leftToRight'? i*deltaXinUnits/nTicks + config.x.min : -i*deltaXinUnits/nTicks + config.x.max

          return (
            <>
              <line x1={x} y1={yStart} x2={x} y2={yTick} stroke="black" stroke-width={4} stroke-linecap={s > 0 && "round"}/>
              {/* {isNthTick && <text x={x} y={yNumber} font-size={40*s} dominantBaseline="middle" textAnchor="middle">{value}</text>} */}
            </>
          )
        })
      }
    </>
	)
}



