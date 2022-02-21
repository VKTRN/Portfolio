import {useState, useRef, useEffect} from "react"
import React from 'react';

import Header            from "../components/Header"
import Footer            from "../components/Footer"
import Editor            from '../components/Editor'
import HorizontalMeasure from '../components/HorizontalMeasure'
import VerticalMeasure   from '../components/VerticalMeasure'

function pixelToNum(value){
  return parseInt(value.replace(/px/,""))
}

function add_px(value,px){
  return pixelToNum(value) + px + "px";
}

// function copy_object(target){
//   let object = {};

//   Object.entries(target).forEach(entry => {
//       object[entry[0]] = entry[1] 
//   })

//   return object
// }

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

const initial_html = "<body>\n\t<div class='container'>\n\t\t<div class='square'></div>\n\t</div>\n</body>"

let initial_css = "" 

initial_css = openSelector(initial_css,".square")
initial_css = addDeclaration(initial_css, "left", "100px")
initial_css = addDeclaration(initial_css, "top", "100px")
initial_css = closeSelector(initial_css)

initial_css = addNewLine(initial_css)
initial_css = addNewLine(initial_css)

initial_css = openSelector(initial_css,".container")
initial_css = addDeclaration(initial_css, "position", "relative")
initial_css = closeSelector(initial_css)

function Blog() {

  function setPropertyValue(value, property, selector){
    const selectorStringStart = css.indexOf(selector)
    const selectorStringEnd = css.slice(selectorStringStart).indexOf("}")+selectorStringStart
    const cssString = css.slice(selectorStringStart, selectorStringEnd)
    const start = cssString.indexOf(property)+property.length+1
    const end   = cssString.slice(start).indexOf(";") + start
    const newString = css.slice(0, selectorStringStart+start) + " " + value + css.slice(selectorStringStart + end)
    
    setCss(newString)
    // return newString
  }

  function change_position(){
    position === "relative" ? setPropertyValue("static", "position", "container") : setPropertyValue("relative", "position", "container")
  }

  const [html, setHtml]          = useState(initial_html)
  const [css, setCss]            = useState(initial_css)
  const [left, set_left]         = useState("100px")
  const [top, set_top]           = useState("100px")
  const [position, set_position] = useState("relative")
  const ref_square               = useRef()
  const ref_display              = useRef()

  const style_line_x     = {top: add_px(top, 35), alignment:"horizontal"};
  const style_line_y     = {left:add_px(left,35), alignment:"vertical"};

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



    set_left(getPropertyValue("left", "square"))
    set_top(getPropertyValue("top", "square"))
    set_position(getPropertyValue("position", "container"))
  },[css])

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
          <button onClick={change_position}>toggle</button>
        </div>

        <div ref={ref_display} className="code-display" >
          <span className="name">body</span>
          <div className="container" style={{ position: position}}>
            <div ref={ref_square} className="square" style={{ left: left, top: top}}>
              <span className="name">.square</span>
            </div>
          </div>
          <span className="name2">.container</span>
          <HorizontalMeasure style = {style_line_x} length = {left} position={position}/>
          <VerticalMeasure   style = {style_line_y} length = {top}  position={position}/>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;