import React, {useState ,useEffect} from 'react'

function pixelToNum(value){
  return parseInt(value.replace(/px/,""))
}

function add_px(value,px){
  return pixelToNum(value) + px + "px";
}

function copy_object(target){
  let object = {};

  Object.entries(target).forEach(entry => {
      object[entry[0]] = entry[1] 
  })

  return object
}

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

function HorizontalMeasure(props) {
    
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const windowDimensions      = useWindowDimensions()

    
    function line_inner(style_parent, style_child) {

        // horizontal measure when measure is big enough to fit value
        
        return(
            <div className="measure x ease" style={style_parent}>
                <span className="arrow-left ease"></span>
                <div className="measure-shaft x ease" style={style_child}>
                    <span className="measure-line ease"></span>
                    <span className="measure-value ease">{props.length}</span>
                    <span className="measure-line ease"></span>
                </div>
                <span className="arrow-right"></span>
            </div>
        )
    }

    function line_outer(style_parent, style_child) {

        // horizontal measure when measure is to small to fit value

        return(
            <div className="measure x ease" style={style_parent}>
                <div className="arrow-right ease"></div>
                <div className="measure-line ease" style={style_child}></div>
                <div className="arrow-left ease"></div>
                <span className="measure-value ease">{props.length}</span>
            </div>
        )
    }
    
    useEffect(() => {

        // sets the offset of the lines with respect to the property position of the div screen 
        // whenever position is changed
        
        if (props.position === "relative"){
          const x = document.querySelector(".container").getBoundingClientRect().x;
          const y = document.querySelector(".container").getBoundingClientRect().y;
          setOffsetX(x);
          setOffsetY(y);
        }

        if (props.position === "static"){
            const x = document.querySelector(".code-display").getBoundingClientRect().x;
            const y = document.querySelector(".code-display").getBoundingClientRect().y;
            setOffsetX(x);
            setOffsetY(y);
        }
    }, [props.position, windowDimensions])

    let style = copy_object(props.style) // copy style-object to add some styles
    style.top = add_px(style.top, offsetY)

    if(pixelToNum(props.length)>=70){ // if measure is bigger than 70px, value fits in measure
        style.width = props.length;
        style.left  = offsetX;
        return line_inner(style);
    }
    else{ // else value is rendered outside measure

        const value = pixelToNum(props.length);
        style.left  = offsetX - 8

        value < 0 ? style.left += value : style.left += 0;

        return line_outer(style, {width:Math.abs(value)});
    }

}

export default HorizontalMeasure