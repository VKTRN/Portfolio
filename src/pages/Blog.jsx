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

function copy_object(target){
  let object = {};

  Object.entries(target).forEach(entry => {
      object[entry[0]] = entry[1] 
  })

  return object
}

function addDeclaration(css_string, property, value){
  return css_string+"\n\t"+property+": "+value+";"
}

function openSelector(selector){
  return selector+"{"
}

function closeSelector(css_string){
  return css_string + "\n}"
}

const initial_html = "<body>\n\t<div class='container'></div>\n</body>"

let initial_css 

initial_css = openSelector(".container")
initial_css = addDeclaration(initial_css, "left", "100px")
initial_css = addDeclaration(initial_css, "top", "100px")
initial_css = closeSelector(initial_css)

function Blog() {

  const [html, setHtml]  = useState(initial_html)
  const [css, setCss]    = useState(initial_css)
  const [left, set_left] = useState("100px")
  const [top, set_top]   = useState("100px")
  const ref_square       = useRef()
  const ref_display      = useRef()

  const style_line_x     = {top:add_px(top,25),  alignment:"horizontal"};
  const style_line_y     = {left:add_px(left,25),  alignment:"vertical"};


  function getPropertyValue(property, selector){
    const selectorStringStart = css.indexOf(selector)
    const selectorStringEnd = css.slice(selectorStringStart).indexOf("}")+selectorStringStart
    const cssString = css.slice(selectorStringStart, selectorStringEnd)
    const start = cssString.indexOf(property)+property.length+1
    const end   = cssString.slice(start).indexOf(";") + start
    const value = cssString.slice(start,end).replace(/\s/g, "")

    return value
  }

  useEffect(() => {
    set_left(getPropertyValue("left", "container"))
    set_top(getPropertyValue("top", "container"))
    console.log(ref_display.current.getBoundingClientRect());
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
        </div>

        <div ref={ref_display} className="code-display" >
          <div ref={ref_square} className="container" style={{ left: left, top: top}}>
          </div>
          <HorizontalMeasure style = {style_line_x} length = {left} position={"absolute"}/>
          <VerticalMeasure style = {style_line_y} length = {top} position={"absolute"}/>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;