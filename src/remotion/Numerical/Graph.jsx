import React             from "react"
import {useCurrentFrame} from 'remotion'
import {useVideoConfig}  from 'remotion'
import {ease}            from '../../functions.ts'
import {useSelector}     from 'react-redux'

export const Graph = () => {

  const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()

  const data   = useSelector(state => state.numerical)
  const config = useSelector(state => state.config)

  const pixelsPerXUnit =  config.x.length*19.2/(config.x.max - config.x.min)
  const pixelsPerYUnit = -config.y.length*10.8/(config.y.max - config.y.min)
  const x0             = config.x.x0*19.2
  const y0             = videoConfig.height-config.y.y0*10.8

	return (
    <>
      {
        data.map((item, i) => {

          const isNotLastPoint = i < data.length - 1
          
          const t      = ease(frame, i*3+25, i*3+27)
          const x      = pixelsPerXUnit * (item.x - config.x.min) 
          const y      = pixelsPerYUnit * (item.y - config.y.min)
          const cx     = x0 + x 
          const cy     = y0 + y
          const radius = 8*t
          const dx     = isNotLastPoint && (data[i+1].x-data[i].x) * pixelsPerXUnit
          const dy     = isNotLastPoint && (data[i+1].y-data[i].y) * pixelsPerYUnit
          const x2     = isNotLastPoint && cx + t*dx
          const y2     = isNotLastPoint && cy + t*dy

          return (
            <>
              <circle cx={cx} cy={cy} r={radius}/>
              {isNotLastPoint && <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="black"/>}
            </>
          )
        })
      }
    </>
	)
}

