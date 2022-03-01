import {useState, useRef, useEffect} from "react"
import {useWindowDimensions}         from '../hooks'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import React from 'react';
import Header            from "../components/Header"
import Footer            from "../components/Footer"
import Editor            from '../components/Editor'
import HorizontalMeasure from '../components/HorizontalMeasure'
import VerticalMeasure   from '../components/VerticalMeasure'
// import HelperLineX       from '../components/HelperLineX'
// import HelperLineY       from '../components/HelperLineY'
// import LabeledSwitch     from '../components/LabeledSwitch'

function pixelToNum(value){
  return parseInt(value.replace(/px/,""))
}

function toPixel(value){
  return value + "px";
}

function addDeclaration(css_string, property, value){
  return css_string+"\n  "+property+": "+value+";"
}

function openSelector(css_string, selector){
  return css_string + selector+"{"
}

function addNewLine(css_string){
  return css_string + "\n"
}

function closeSelector(css_string){
  return css_string + "\n}"
}

function makeHTML(){
  const initial_html = "<body>\n\t<div class='container'>\n\t\t<div class='square'></div>\n\t</div>\n</body>"

  return initial_html
}

function makeCSS(){
  let initial_css = "" 
  
  initial_css = openSelector(initial_css,".square")
  initial_css = addDeclaration(initial_css, "position", "absolute")
  initial_css = addDeclaration(initial_css, "left", "100px")
  initial_css = addDeclaration(initial_css, "top", "100px")
  initial_css = closeSelector(initial_css)
  
  initial_css = addNewLine(initial_css)
  initial_css = addNewLine(initial_css)
  
  initial_css = openSelector(initial_css,".container")
  initial_css = addDeclaration(initial_css, "position", "relative")
  initial_css = closeSelector(initial_css)

  return initial_css

}



function Blog() {

  function setPropertyValue(value, property, selector){
    const selectorStringStart = css.indexOf(selector) // find index, where the demanded selector begins in the string
    const selectorStringEnd   = css.slice(selectorStringStart).indexOf("}")+selectorStringStart // find index, where the demanded selector ends in the string
    const substring            = css.slice(selectorStringStart, selectorStringEnd) // get substring of only the selector 
    const start               = substring.indexOf(property)+property.length+1 // get index of where the value of the property begins
    const end                 = substring.slice(start).indexOf(";") + start // get index of where the value of the property ends
    console.log(property,start, end);
    const newString           = css.slice(0, selectorStringStart+start) + " " + value + css.slice(selectorStringStart + end) // replace the value
    
    setCss(newString)
  }

  function changeProperty(newProperty, property, selector){
    const selectorStringStart = css.indexOf(selector) // find index, where the demanded selector begins in the string
    const selectorStringEnd   = css.slice(selectorStringStart).indexOf("}")+selectorStringStart // find index, where the demanded selector ends in the string
    const cssString           = css.slice(selectorStringStart, selectorStringEnd) // get substring of only the selector 
    const start               = cssString.indexOf(property) // get index of where the property begins
    const end                 = cssString.slice(start).indexOf(":") + start // get index of where the property ends
    const newString           = css.slice(0, selectorStringStart+start) + newProperty + css.slice(selectorStringStart + end) // replace the value
    
    setCss(newString)
  }

  // function change_position(){
  //   position === "relative" ? setPropertyValue("static", "position", "container") : setPropertyValue("relative", "position", "container")
  // }

  function move(direction){
    switch (direction) {
      case "left":
        setPropertyValue(toPixel(vertical.value -50), vertical.property, "square")
        break;
      case "right":
        setPropertyValue(toPixel(vertical.value+ 50), vertical.property, "square")
        break;
      case "up":
        setPropertyValue(toPixel(horizontal.value -50),horizontal.property, "square")
        break;
      case "down":
        setPropertyValue(toPixel(horizontal.value+ 50), horizontal.property, "square")
        break;
      default:
        break;
    }
  }

  function toggleHorizontal(){
    if(vertical.property === "left"){
      changeProperty("right","left",".square")
      set_vertical({property:"right", value: vertical.value})
    }
    else{
      changeProperty("left","right",".square")
      set_vertical({property:"left", value: vertical.value})
    }
  }

  function toggleVertical(){
    if(horizontal.property === "top"){
      changeProperty("bottom","top",".square")
      set_horizontal({property:"bottom", value: horizontal.value})
    }
    else{
      changeProperty("top","bottom",".square")
      set_horizontal({property:"top", value: horizontal.value})
    }
  }

  const [html, setHtml]              = useState(makeHTML())
  const [css, setCss]                = useState(makeCSS())
  const [vertical, set_vertical]     = useState({property: "left", value: 100})
  const [horizontal, set_horizontal] = useState({property: "top", value: 100})
  const [x, set_x]                   = useState(0)
  const [y, set_y]                   = useState(0)
  const [position, set_position]     = useState("relative")
  const ref_square                   = useRef()
  const ref_display                  = useRef()
  const windowDimensions             = useWindowDimensions()

  useEffect(() => {
    function getPropertyValue(property, selector){
      const selectorStringStart = css.indexOf(selector)
      const selectorStringEnd = css.slice(selectorStringStart).indexOf("}")+selectorStringStart
      const cssString = css.slice(selectorStringStart, selectorStringEnd)
      const start = cssString.indexOf(property)+property.length+1
      const end   = cssString.slice(start).indexOf(";") + start
      const value = cssString.slice(start,end).replace(/\s/g, "")
  
      return value
    }

    set_vertical(  {property: vertical.property,value:   pixelToNum(getPropertyValue(vertical.property,   "square"))})
    set_horizontal({property: horizontal.property,value: pixelToNum(getPropertyValue(horizontal.property, "square"))})
    set_position(getPropertyValue("position", "container"))
  },[css])

  useEffect(() => {

    // sets the offset of the lines with respect to the property position of the .container 
    // whenever position is changed

    const selector   = position === "static" ? ".code-display" : ".container"
    const dimensions = document.querySelector(selector).getBoundingClientRect()
    
    vertical.property === "left"? set_x(dimensions.x) : set_x(windowDimensions.width - dimensions.x - dimensions.width)
    horizontal.property === "top"? set_y(dimensions.y) : set_y(windowDimensions.height - dimensions.y - dimensions.height)
    
  }, [position, windowDimensions, vertical, horizontal])

  const style_container = {}
  style_container[vertical.property]   = vertical.value
  style_container[horizontal.property] = horizontal.value


  return (
    <div className="Blog">
      <Header></Header>

      <div className="blog">

        <div className="text-container">
          <h2>Position: Absolute</h2>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugiat reprehenderit, delectus et explicabo provident hic facere tempore cumque velit mollitia fugit quos molestiae harum quis, alias error magnam asperiores quisquam architecto culpa rerum maiores at! Delectus nemo, laudantium quibusdam iure dicta eius ullam obcaecati reprehenderit veniam, quod quidem dignissimos.
          </div>
        </div>

        <div className="code">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <div className="buttons">
            {/* <LabeledSwitch toggle={change_position} position={position}></LabeledSwitch> */}
            <button onClick={() => move("up")}>
              <MdOutlineKeyboardArrowUp />
            </button>
            <button onClick={() => move("down")}>
              <MdOutlineKeyboardArrowDown />
            </button>
            <button onClick={() => move("left")}>
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button onClick={() => move("right")}>
              <MdOutlineKeyboardArrowRight />
            </button>
            <button onClick={toggleHorizontal}>
              hori
            </button>
            <button onClick={toggleVertical}>
              vert
            </button>
          </div>
        </div>

        <div ref={ref_display} className="code-display" >
          <span className="name">body</span>
          <div className="container" style={{ position: position}}>
            <div ref={ref_square} className="square" style={style_container}>
              <span className="name">.square</span>
            </div>
          </div>
          <span className="name2">.container</span>
          <HorizontalMeasure x={x} y = {y+horizontal.value+35} length={vertical.value} vertical={vertical.property} horizontal={horizontal.property}/>
          <VerticalMeasure x={x+vertical.value+35} y = {y} length={horizontal.value} horizontal={horizontal.property} vertical={vertical.property}/>
          {/* <HelperLineX top={top} position={position}/> */}
          {/* <HelperLineY left={vertical.value} position={position}/> */}
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;