import React    from 'react'
import {FC}     from 'react'
import {getArc} from '../../functions'

type Arc = {
  x:      number
  y:      number
  radius: number
  start:  number
  end:    number
  color:  string
}

export const Arc: FC<Arc> = ({x, y, radius, start, end, color}) => {
	
  const path = getArc(x,y,radius,start,end)

	return <path d={path} fill={color}/>
	
}