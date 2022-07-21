import React from 'react'

function VerticalMeasure({x, y, length}) {

  let len       = Math.abs(length)
  let line_y    = y
  let rotation1 = "scaleY(1)"
  let rotation2 = "scaleY(1)"

  const length_is_negative = length < 0
  const length_is_long     = Math.abs(length) > 70

  if(length_is_long){
    len -= 8
    line_y += 4
  }
  else{
    rotation1 = "translateY(-6px) scaleY(-1)"
    rotation2 = "translateY(6px) scaleY(-1)"
  }
  
  if(length_is_negative){
    line_y += length
  }

  // const style_measure = {left: line_y, top:x,height:len}
  const style_measure = {left: x, top:line_y,height:len}

  return(
    <>
      <div className="measure-y"  style={style_measure}>
        <div className="arrow-up"  style={{transform: rotation1}}></div>
        <div className="value">{length}</div>
        <div className="arrow-down" style={{transform: rotation2}}></div>
      </div>
    </>
  )
}

export default VerticalMeasure