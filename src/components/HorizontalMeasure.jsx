import React from "react"

function HorizontalMeasure({x, y, length, vertical, horizontal}) {

  let len       = Math.abs(length)
  let line_x    = x
  let rotation1 = "scaleX(1)"
  let rotation2 = "scaleX(1)"

  const length_is_negative = length < 0
  const length_is_long     = Math.abs(length) > 70

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

  const style_measure = {width:len}
  style_measure[vertical] = line_x
  style_measure[horizontal] = y


  return(
    <>
      <div className="measure-x"  style={style_measure}>
        <div className="arrow-left"  style={{transform: rotation1}}></div>
        <div className="value">{length}</div>
        <div className="arrow-right" style={{transform: rotation2}}></div>
      </div>
    </>
  )
}

export default HorizontalMeasure