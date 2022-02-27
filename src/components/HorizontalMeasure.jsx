import React, {useState ,useEffect} from 'react'
import {useWindowDimensions} from '../hooks'

function HorizontalMeasure({top, length, position}) {

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const windowDimensions      = useWindowDimensions()

  useEffect(() => {

    // sets the offset of the lines with respect to the property position of the .container 
    // whenever position is changed

    const selector   = position === "static" ? ".code-display" : ".container"
    const dimensions = document.querySelector(selector).getBoundingClientRect()
    
    setOffsetX(dimensions.x);
    setOffsetY(dimensions.y);
    
  }, [position, windowDimensions])


  let len    = Math.abs(length)
  let line_x = offsetX
  let rotation1 = "scaleX(1)"
  let rotation2 = "scaleX(1)"

  const length_is_negative = length < 0
  const length_is_long = Math.abs(length) > 70

  if(length_is_long){
    len -= 8
    line_x += 4
  }
  else{
    rotation1 = "translateX(-6px) scaleX(-1)"
    rotation2 = "translateX(6px) scaleX(-1)"
  }
  
  if(length_is_negative){
    line_x += length
  }


  return(
    <>
      <div className="measure-x"  style={{width:len, left:line_x, top:top+offsetY+35 }}>
        <div className="arrow-left"  style={{transform: rotation1}}></div>
        <div className="value">{length}</div>
        <div className="arrow-right" style={{transform: rotation2}}></div>
      </div>
    </>
  )
}

export default HorizontalMeasure