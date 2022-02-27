import React, {useState ,useEffect} from 'react'

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {width, height};
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function VerticalMeasure({left, length, position}) {

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const windowDimensions      = useWindowDimensions()

  useEffect(() => {

      // sets the offset of the lines with respect to the property position of the div screen 
      // whenever position is changed
      
      if (position === "relative"){
        const x = document.querySelector(".container").getBoundingClientRect().x;
        const y = document.querySelector(".container").getBoundingClientRect().y;
        setOffsetX(x);
        setOffsetY(y);
      }

      if (position === "static"){
          const x = document.querySelector(".code-display").getBoundingClientRect().x;
          const y = document.querySelector(".code-display").getBoundingClientRect().y;
          setOffsetX(x);
          setOffsetY(y);
      }
  }, [position, windowDimensions])


  let len    = Math.abs(length)
  let line_y = offsetY
  let rotation1 = "scaleX(1)"
  let rotation2 = "scaleX(1)"

  const length_is_negative = length < 0
  const length_is_long = Math.abs(length) > 70

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


  return(
    <>
      <div className="measure-y"  style={{height:len, top:line_y, left:left+offsetX+35 }}>
        <div className="arrow-up"  style={{transform: rotation1}}></div>
        <div className="value">{length}</div>
        <div className="arrow-down" style={{transform: rotation2}}></div>
      </div>
    </>
  )
}

export default VerticalMeasure