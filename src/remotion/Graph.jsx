import React             from "react"
import {useCurrentFrame} from 'remotion'
import {useVideoConfig}  from 'remotion'
import {ease}            from '../functions.js'

export const Graph = ({data,config}) => {

  const videoConfig = useVideoConfig()
  const frame       = useCurrentFrame()

  const pixelsPerXUnit =  config.width/config.x.max
  const pixelsPerYUnit = -config.height/config.y.max
  const x0             = 200
  const y0             = videoConfig.height-200

	return (
    <svg viewBox={`0 0 ${videoConfig.width} ${videoConfig.height}`} style = {{position: "absolute"}}>
      {
        data.map((item, i) => {

          const isNotLastPoint = i < data.length - 1
          
          const t      = ease(frame, i*3+25, i*3+2+25)
          const x      = pixelsPerXUnit * item.x 
          const y      = pixelsPerYUnit * item.y 
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
    </svg>
	)
}

