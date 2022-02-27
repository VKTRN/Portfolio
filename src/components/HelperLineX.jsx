import React, {useState ,useEffect} from 'react'
import {useWindowDimensions} from '../hooks'

const HelperLineX = ({top,  position}) => {

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [height, setHeight]   = useState(0)
  const windowDimensions      = useWindowDimensions()

  useEffect(() => {

      // sets the offset of the lines with respect to the property position of the .container 
      // whenever position is changed

      const selector   = position === "static" ? ".code-display" : ".container"
      const dimensions = document.querySelector(selector).getBoundingClientRect()
      
      setOffsetX(dimensions.x);
      setOffsetY(dimensions.y);
      setHeight(dimensions.height);

  }, [position, windowDimensions])

  // variables
  const left_helper   = offsetX
  
  // booleans
  const is_above      = top+35 < 0
  const is_underneath = top+35 > height
  const is_outside    = is_above || is_underneath
  const is_positioned = position !== "static"

  // to be determined
  let opacity
  let length_helper
  let top_helper
  let bottom_helper
  let style
  
  if(is_outside && is_positioned){
    opacity = 1
    if(is_underneath){
      top_helper    = offsetY+height
      bottom_helper = "default"
      length_helper = top - height +45
      style         = {top:top_helper, left: left_helper, height: length_helper, opacity:opacity}
    }
    else{
      length_helper = Math.abs(top +25)
      top_helper    = "initial"
      bottom_helper = windowDimensions.height- offsetY
      style         = {bottom:bottom_helper, left: left_helper, height: length_helper, opacity:opacity}
    }
  }
  else{
    opacity       = 0
    length_helper = 0
    top_helper    = top - height +45
    style         = {top:0,bottom:0, left: left_helper, height: length_helper, opacity:opacity}
  }

  return <div className="helper-x" style={style}></div>
}

export default HelperLineX