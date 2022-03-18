import {useState, useRef, useEffect, useLayoutEffect} from "react"
import {useWindowDimensions} from '../hooks'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import React from 'react';
import Header            from "../components/Header"
import Footer            from "../components/Footer"
import Editor            from '../components/Editor'
import HorizontalMeasure from '../components/HorizontalMeasure'
import VerticalMeasure   from '../components/VerticalMeasure'
import VerticalHelper    from '../components/HelperLineX'
import HorizontalHelper  from '../components/HelperLineY'
import LabeledSwitch     from '../components/LabeledSwitch'
import Buttons           from '../components/Buttons'

function Blog() {

  function setPropertyValue(css_object, selector, property, value){
    const new_css_object = [...css_object]
    let declaration      = getDeclaration(new_css_object, selector, property)
    declaration.value    = value

    set_css_object(new_css_object)
  }

  function changeProperty(css_object, selector, property, new_property){
    const new_css_object = [...css_object]
    let declaration      = getDeclaration(new_css_object, selector, property)
    declaration.property = new_property
    
    set_css_object(new_css_object)
  }

  function move(direction){
    switch (direction) {
      case "left":
        setPropertyValue(css_object,  ".square",horizontal.property, toPixel(horizontal.value -50) )
        break;
      case "right":
        setPropertyValue(css_object,  ".square",horizontal.property, toPixel(horizontal.value + 50) )
        break;
      case "up":
        setPropertyValue(css_object,  ".square",vertical.property, toPixel(vertical.value - 50))
        break;
      case "down":
        setPropertyValue(css_object,  ".square",vertical.property, toPixel(vertical.value + 50) )
        break;
      default:
        break;
    }
  }

  function togglePosition(){
    const new_position = position === "relative"? "static" : "relative"
    setPropertyValue(css_object,  ".container","position", new_position)
  }

  function toggleHorizontal(){

    if(horizontal.property === "left"){
      changeProperty(css_object, ".square", "left", "right")
    }
    else{
      changeProperty(css_object, ".square", "right", "left")
    }
  }

  function setDirection(direction){

    if(direction === "right" && horizontal.property === "left"){changeProperty(css_object, ".square", "left", "right")}
    if(direction === "left"  && horizontal.property === "right"){changeProperty(css_object, ".square", "right", "left")}
    if(direction === "top"  && vertical.property === "bottom"){changeProperty(css_object, ".square", "bottom", "top")}
    if(direction === "bottom"  && vertical.property === "top"){changeProperty(css_object, ".square", "top", "bottom")}
  }

  function toggleVertical(){
    if(vertical.property === "top"){
      changeProperty(css_object, ".square", "top", "bottom")
    }
    else{
      changeProperty(css_object, ".square", "bottom", "top")
    }
  }

  function get_vertical_helper(parent, horizontal_measure, horizontal, vertical){

    let helper = {}
    
    if (position === "static") return {"right":"initial","top":"initial","bottom":"initial","height":0,"opacity":0,"left":"initial"}

    const is_above       = horizontal_measure.y < parent.center.y 
    const is_underneath  = !is_above
    const is_outside_y   = horizontal_measure.y < parent.top  || horizontal_measure.y > parent.bottom
    
    if (is_underneath) {
      const h     = vertical.property === "top"? Math.max(vertical.value + 45 - parent.height, 0) : - vertical.value - 25
      console.log(h)
      helper      = {right:"initial", top:parent.bottom, bottom:"initial",height:h}
    } 
    else {
      const h = vertical.property === "top"? Math.max(Math.abs(vertical.value) -25,0) : vertical.value + 45 - parent.height
      helper = {right:"initial", top:"initial", bottom:window_.height - parent.top, height:h}
    }
    
    helper["opacity"]    = is_outside_y? 1:0
    helper["left"]       = horizontal.property === "left" ? parent.left : parent.right
    
    return helper

  }

  function get_horizontal_helper(parent, vertical_measure, horizontal, vertical){

    let helper = {}
    
    if (position === "static") return {"right":"initial","top":"initial","bottom":"initial","width":0,"opacity":0,"left":"initial"}
    
    const is_left       = vertical_measure.x   < parent.center.x 
    const is_right      = !is_left
    const is_outside_x  = vertical_measure.x   < parent.left || vertical_measure.x   > parent.right
    const scrollbar_width = 15

    if (is_right) {
      const h = horizontal.property === "left"? Math.max(horizontal.value + 45 - parent.width, 0) : - horizontal.value - 25
      helper = {bottom:"initial", left:parent.right, right:"initial",width:h}
    } else {
      const h = horizontal.property === "left"? Math.max(Math.abs(horizontal.value) -25, 0) :  horizontal.value + 45 - parent.width
      helper = {bottom:"initial", left:"initial", right:window_.width - parent.left - scrollbar_width, width:h}
    }

    helper["opacity"]   = is_outside_x? 1:0
    helper["top"]       = vertical.property === "top" ? parent.top : parent.bottom

    return helper

  }
 
  const [css_object, set_css_object]     = useState(make_css_object())
  const window_                          = useWindowDimensions()
  const [parent, set_parent]             = useState({left:0,right:0,top:0,bottom:0, width:0, height:0, center:{x:0, y:0}})
  const [highlighting, set_highlighting] = useState({directions:"", values:"", position:""})

  const horizontal         = get_horizontal(css_object) // {property: "left" || "right", value: number}
  const vertical           = get_vertical(css_object) // {property: "top" || "bottom", value: number}
  const position           = getPropertyValue(css_object, ".container", "position") // "relative" || "static"
  const square             = get_square(parent, horizontal, vertical) // {x: number, y: number}
  const vertical_measure   = get_vertical_measure(parent, horizontal, vertical) 
  const horizontal_measure = get_horizontal_measure(parent, horizontal, vertical)
  const vertical_helper    = get_vertical_helper(parent, horizontal_measure, horizontal,vertical)
  const horizontal_helper  = get_horizontal_helper(parent, vertical_measure, horizontal,vertical)

  useEffect(() => {
    position === "relative"? set_parent(get_container()) : set_parent(get_body()) 
  },[window_, css_object])

  return (
    <div className="blog">
      <Header></Header>

      <div className="content">

        <div className="text-wrapper">
          <h2>Position: Absolute</h2>
          <ul className="text">
            <li 
              onMouseEnter={() => {set_highlighting({directions:"", values:"", position:"highlighted"})}}
              onMouseLeave={() => {set_highlighting({directions:"", values:"", position:""})}}
              >
              The position of .square is relative to its first positioned (relative, absolute, fixed, sticky but not static) ancestor,
              which is either body or .container.
            </li>
            <br />
            <li 
              onMouseEnter={() => {set_highlighting({directions:"highlighted", values:"", position:""})}}
              onMouseLeave={() => {set_highlighting({directions:"", values:"", position:""})}}
              >
              The properties left, right, top, bottom define to which edges the position of .square is set relative to.
            </li>
            <br />
            <li 
              onMouseEnter={() => {set_highlighting({directions:"", values:"highlighted", position:""})}}
              onMouseLeave={() => {set_highlighting({directions:"", values:"", position:""})}}
              >
              Changing the values left or right and top or bottom defines the horizontal and vertical destances relative to the first positioned ancestor of .square.
            </li>
          </ul>
          <Buttons position={position} togglePosition={togglePosition} setDirection={setDirection} move={move} highlighting={highlighting}></Buttons>
        </div>

        <div className="code-wrapper">
          <Editor
            language="xml"
            displayName="HTML"
            value={makeHTML()}
          />
          <Editor className="code-css"
            language="css"
            displayName="CSS"
            value={get_css_string(css_object)}
          />
        </div>

        <div className="render-wrapper" >
          <div className="body-name">body</div>
          <div className="container">
            <div className="container-name">.container</div>
            <div className="square" style={{left: square.x, top:square.y}}>
            <span className="name">.square</span>
            </div>
          </div>
          <HorizontalMeasure x={horizontal_measure.x} y = {horizontal_measure.y} length={horizontal_measure.length}/>
          <VerticalMeasure   x={vertical_measure.x}   y = {vertical_measure.y}   length={vertical_measure.length}/>
          <VerticalHelper   style={vertical_helper}/>
          <HorizontalHelper style={horizontal_helper}/>
          

        </div>
      </div>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default Blog;












  /////////////////
 /// FUNCTIONS ///
/////////////////

function pixelToNum(value){
  return parseInt(value.replace(/px/,""))
}

function toPixel(value){
  return value + "px";
}

// function addDeclaration_(css_string, property, value){
//   return css_string+"\n  "+property+": "+value+";"
// }

// function openSelector(css_string, selector){
//   return css_string + selector+"{"
// }

// function addNewLine(css_string){
//   return css_string + "\n"
// }

// function closeSelector(css_string){
//   return css_string + "\n}"
// }

function makeHTML(){
  const initial_html = "<body>\n\t<div class='container'>\n\t\t<div class='square'></div>\n\t</div>\n</body>"

  return initial_html
}

// function makeCSS_(){
//   let initial_css = "" 
  
//   initial_css = openSelector(initial_css,".square")
//   initial_css = addDeclaration(initial_css, "position", "absolute")
//   initial_css = addDeclaration(initial_css, "left", "100px")
//   initial_css = addDeclaration(initial_css, "top", "100px")
//   initial_css = closeSelector(initial_css)
  
//   initial_css = addNewLine(initial_css)
//   initial_css = addNewLine(initial_css)
  
//   initial_css = openSelector(initial_css,".container")
//   initial_css = addDeclaration(initial_css, "position", "relative")
//   initial_css = closeSelector(initial_css)

//   return initial_css

// }



// function getPropertyValue_(css,property, selector){
//   const selectorStringStart = css.indexOf(selector)
//   const selectorStringEnd   = css.slice(selectorStringStart).indexOf("}")+selectorStringStart
//   const cssString           = css.slice(selectorStringStart, selectorStringEnd)
//   const start               = cssString.indexOf(property)+property.length+1
//   const end                 = cssString.slice(start).indexOf(";") + start
//   const value               = cssString.slice(start,end).replace(/\s/g, "")

//   return value
// }






  //////////////////
 //// NEW CODE ////
//////////////////

function add_rule(name){
  let rule = {name: name, declarations:[]}
  return rule
}

function add_declaration(rule,property,value){
  rule.declarations.push({property: property, value:value})
  return rule
}

function get_rule_string(rule){
  let name = rule.name
  let declarations = rule.declarations
  let string = name + "{\n"

  declarations.forEach((declaration) => {
    string = string + "\t" + declaration.property+": "+declaration.value + ";\n"
  })

  string = string + "}"

  return string
}

function get_css_string(rules){
  let css_string = ""
  rules.forEach((rule, i) => {
    let rule_string = get_rule_string(rule)
    css_string = css_string + rule_string 
    css_string = i === rules.length-1? css_string : css_string + "\n\n" 
  })
  return css_string
}

function getMatchingObject(array, property, value){
  const match = array.find(x => x[property] === value)
  return match
}

function getDeclaration(css_object, selector, property){
  const rule         = getMatchingObject(css_object, "name", selector)
  const declarations = rule.declarations
  const declaration  = getMatchingObject(declarations, "property", property)

  return declaration
}

function getPropertyValue(css_object, selector, property){
  const declaration = getDeclaration(css_object, selector, property)
  
  return declaration.value
}

function get_vertical_property(css_object, selector){
  const top    = getDeclaration(css_object, selector, "top")
  const bottom = getDeclaration(css_object, selector, "bottom")
  if(top)    return "top"
  if(bottom) return "bottom"
}

function get_horizontal_property(css_object, selector){
  const left    = getDeclaration(css_object, selector, "left")
  const right = getDeclaration(css_object, selector, "right")
  if(left)    return "left"
  if(right) return "right"
}

function make_css_object(){
  
  let rule_container = add_rule(".square")
  rule_container     = add_declaration(rule_container, "position", "absolute")
  rule_container     = add_declaration(rule_container, "left", "100px")
  rule_container     = add_declaration(rule_container, "top", "100px")

  let rule_square = add_rule(".container")
  rule_square     = add_declaration(rule_square, "position", "relative")

  let css_object = [rule_container, rule_square]

  return css_object
}

function get_horizontal(css_object){
  console.log(css_object);

  const property = get_horizontal_property(css_object, ".square")
  const value    = pixelToNum(getPropertyValue(css_object, ".square", property))
  const horizontal = {property: property, value:value}

  return horizontal
}

function get_vertical(css_object){
  const property = get_vertical_property(css_object, ".square")
  const value    = pixelToNum(getPropertyValue(css_object, ".square", property))
  const vertical = {property: property, value:value}

  return vertical
}

function getDimensions(selector){
  return document.querySelector(selector).getBoundingClientRect()
}

function get_container(){
  const container_dimensions = getDimensions(".container")
  const scroll               = window.scrollY
  const container = 
  { left:   container_dimensions.x, 
    right:  container_dimensions.x + container_dimensions.width, 
    top:    container_dimensions.y + scroll, 
    bottom: container_dimensions.y + container_dimensions.height + scroll, 
    width:  container_dimensions.width, 
    height: container_dimensions.height,
    center: 
    { x: container_dimensions.x + container_dimensions.width/2,
      y: container_dimensions.y + container_dimensions.height/2 + scroll
    }
  }
  return container
}

function get_body(){
  const body_dimensions = getDimensions(".code-display")
  const scroll          = window.scrollY
  const body = 
  { left:   body_dimensions.x, 
    right:  body_dimensions.x + body_dimensions.width, 
    top:    body_dimensions.y + scroll, 
    bottom: body_dimensions.y + body_dimensions.height + scroll, 
    width:  body_dimensions.width, 
    height: body_dimensions.height,
    center: 
    { x: body_dimensions.x + body_dimensions.width/2,
      y: body_dimensions.y + body_dimensions.height/2 + scroll
    }
  }
  return body
}

function get_horizontal_measure(parent, horizontal,vertical){
  const measure = {}
  
  measure.x = horizontal.property === "left"? parent.left : parent.right  - horizontal.value
  measure.y = vertical.property === "top"? parent.top + vertical.value + 35 : parent.bottom - vertical.value - 35


  measure.length = horizontal.value

  return measure
}

function get_vertical_measure(parent, horizontal,vertical){
  const measure = {}
  
  measure.x = horizontal.property === "left"? parent.left + horizontal.value + 35 : parent.right - horizontal.value - 35
  measure.y = vertical.property === "top"? parent.top : parent.bottom  - vertical.value


  measure.length = vertical.value

  return measure
}

function get_square(parent, horizontal, vertical){
  const square = {}

  square.x = horizontal.property === "left"? parent.left + horizontal.value : parent.right  - horizontal.value - 70
  square.y = vertical.property   === "top"?  parent.top  + vertical.value   : parent.bottom - vertical.value   - 70

  return square
}

// function get_line(){
//   const element = document.querySelector('.editor-container:nth-child(2)');
//   const line    = element.querySelector('.CodeMirror-line:nth-child(3)');
//   const p       = line.getBoundingClientRect()
//   set_button_pos({x:p.x,y: p.y})
// }