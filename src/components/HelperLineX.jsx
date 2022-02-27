import React, {useState ,useEffect} from 'react'
import {useWindowDimensions} from '../hooks'

const HelperLineX = ({position}) => {

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [height, setHeight]   = useState(0)
  const [width, setWidth]     = useState(0)
  const windowDimensions      = useWindowDimensions()

  useEffect(() => {

      // sets the offset of the lines with respect to the property position of the .container 
      // whenever position is changed

      const selector   = position === "static" ? ".code-display" : ".container"
      const dimensions = document.querySelector(selector).getBoundingClientRect()
      
      setOffsetX(dimensions.x);
      setOffsetY(dimensions.y);
      setHeight(dimensions.height);
      setWidth(dimensions.width);

  }, [position, windowDimensions])

  const top_helper = offsetY + 


  return (
    <div>HelperLineX</div>
  )
}

export default HelperLineX