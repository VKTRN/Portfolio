import React             from "react"
import {useSelector}     from "react-redux"
import {useCurrentFrame} from 'remotion'
import {ease}            from '../../functions.ts'
import {getArcsFromData} from '../../functions.ts'
import {colors}          from '../../functions.ts'
import {Arc}             from './Arc.tsx'

export const Pie = () => {

  const frame = useCurrentFrame()
  const data  = useSelector(state => state.categories)
  const arcs  = getArcsFromData(data.map(a => a.value))
  const t     = ease(frame, 0, 60)

	return (
    <>
      {arcs.map((arc, i) => {

        const x     = 960
        const y     = 540
        const r     = 300
        const start = arc.start*t
        const end   = arc.end*t
        const color = colors[i]

        return <Arc x={x} y={y} radius={r} start={start} end={end} color={color}/>
      }
      )}
    </>
	)
}

