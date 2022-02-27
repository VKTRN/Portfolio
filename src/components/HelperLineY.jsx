import React, {useState ,useEffect} from 'react'
import {useWindowDimensions} from '../hooks'

const HelperLineY = ({left,  position}) => {

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [width, setWidth]     = useState(0)
  const windowDimensions      = useWindowDimensions()

  useEffect(() => {

      // sets the offset of the lines with respect to the property position of the .container 
      // whenever position is changed

      const selector   = position === "static" ? ".code-display" : ".container"
      const dimensions = document.querySelector(selector).getBoundingClientRect()
      
      setOffsetX(dimensions.x);
      setOffsetY(dimensions.y);
      setWidth(dimensions.width);

  }, [position, windowDimensions])

  // variables
  const top_helper   = offsetY
  
  // booleans
  const is_left      = left+35 < 0
  const is_right = left+35 > width
  const is_outside    = is_left || is_right

  // to be determined
  let opacity
  let length_helper
  let left_helper
  let right_helper
  let style
  
  if(is_outside){
    opacity = 1
    if(is_right){
      left_helper    = offsetX+width
      right_helper = "default"
      length_helper = left - width +45
      style         = {left:left_helper, top: top_helper, width: length_helper, opacity:opacity}
    }
    else{
      length_helper = Math.abs(left +25)
      left_helper    = "initial"
      right_helper = windowDimensions.width- offsetX
      style         = {right:right_helper, top: top_helper, width: length_helper, opacity:opacity}
    }
  }
  else{
    opacity       = 0
    length_helper = 0
    left_helper    = left - width +45
    style         = {left:0,right:0, top: top_helper, width: length_helper, opacity:opacity}
  }

  return <div className="helper-y" style={style}></div>
}

export default HelperLineY