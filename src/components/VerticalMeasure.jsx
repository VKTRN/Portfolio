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

function VerticalMeasure(props) {
    
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    
    function line_inner(style_parent, style_child) {

        // horizontal measure when measure is big enough to fit value
        
        return(
            <div className="measure y ease" style={style_parent}>
                <span className="arrow-up ease"></span>
                <div className="measure-shaft y ease" style={style_child}>
                    <span className="measure-line ease"></span>
                    <span className="measure-value ease">{props.length}</span>
                    <span className="measure-line ease"></span>
                </div>
                <span className="arrow-down"></span>
            </div>
        )
    }

    function line_outer(style_parent, style_child) {

        // horizontal measure when measure is to small to fit value

        return(
            <div className="measure y ease" style={style_parent}>
                <div className="arrow-down ease"></div>
                <div className="measure-line ease" style={style_child}></div>
                <div className="arrow-up ease"></div>
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
    }, [props.position])

    let style = copy_object(props.style) // copy style-object to add some styles
    style.left = add_px(style.left, offsetX)

    if(pixelToNum(props.length)>=70){ // if measure is bigger than 70px, value fits in measure
        style.height = props.length;
        style.top  = offsetY;
        return line_inner(style);
    }
    else{ // else value is rendered outside measure

        const value = pixelToNum(props.length);
        style.top  = offsetY - 8

        value < 0 ? style.top += value : style.top += 0;
        
        return line_outer(style, {height:Math.abs(value), flex:"initial"});
    }

}

export default VerticalMeasure
