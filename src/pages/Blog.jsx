import {useState, useRef, useEffect, useLayoutEffect} from "react"
import {useWindowDimensions} from '../hooks'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import React from 'react';
import Header            from "../components/Header"
import Footer            from "../components/Footer"
import Editor            from '../components/Editor'
import HorizontalMeasure from '../components/HorizontalMeasure'
import VerticalMeasure   from '../components/VerticalMeasure'
import HelperLineX       from '../components/HelperLineX'
import HelperLineY       from '../components/HelperLineY'
// import LabeledSwitch     from '../components/LabeledSwitch'

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
  const container = 
  { left:   container_dimensions.x, 
    right:  container_dimensions.x + container_dimensions.width, 
    top:    container_dimensions.y, 
    bottom: container_dimensions.y + container_dimensions.height, 
    width:  container_dimensions.width, 
    height: container_dimensions.height,
    center: 
    { x: container_dimensions.x + container_dimensions.width/2,
      y: container_dimensions.y + container_dimensions.height/2
    }
  }
  return container
}

function get_body(){
  const body_dimensions = getDimensions(".code-display")
  const body = 
  { left:   body_dimensions.x, 
    right:  body_dimensions.x + body_dimensions.width, 
    top:    body_dimensions.y, 
    bottom: body_dimensions.y + body_dimensions.height, 
    width:  body_dimensions.width, 
    height: body_dimensions.height,
    center: 
    { x: body_dimensions.x + body_dimensions.width/2,
      y: body_dimensions.y + body_dimensions.height/2
    }
  }
  return body
}

function get_horizontal_measure(parent, horizontal,vertical){
  const measure = {}
  measure.x = parent.left
  measure.y = parent.top + vertical.value + 35
  measure.length = horizontal.value

  return measure
}

function get_vertical_measure(parent, horizontal,vertical){
  const measure = {}
  measure.x = parent.left + horizontal.value + 35
  measure.y = parent.top
  measure.length = vertical.value

  return measure
}

function get_square(parent, horizontal, vertical){
  const square = {}
  square.x = parent.left + horizontal.value
  square.y = parent.top + vertical.value

  return square
}


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

    function toggleHorizontal(){

    if(horizontal.property === "left"){
      changeProperty(css_object, ".square", "left", "right")
    }
    else{
      changeProperty(css_object, ".square", "right", "left")
    }
  }

  function toggleVertical(){
    if(vertical.property === "top"){
      changeProperty(css_object, ".square", "top", "bottom")
    }
    else{
      changeProperty(css_object, ".square", "bottom", "top")
    }
  }

  const [css_object, set_css_object] = useState(make_css_object())
  const window                       = useWindowDimensions()
  const [parent, set_parent]         = useState({left:0,right:0,top:0,bottom:0, width:0, height:0, center:{x:0, y:0}})

  const horizontal         = get_horizontal(css_object)
  const vertical           = get_vertical(css_object)
  const position           = getPropertyValue(css_object, ".container", "position")
  const square             = get_square(parent, horizontal, vertical)
  const vertical_measure   = get_vertical_measure(parent, horizontal, vertical) 
  const horizontal_measure = get_horizontal_measure(parent, horizontal, vertical)


  useEffect(() => {
    position === "relative"? set_parent(get_container()) : set_parent(get_body()) 
  },[window, css_object])


  return (
    <div className="Blog">
      <div className="logger">
        <div>square: {JSON. stringify(square)}</div>  
      </div>
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
            value={makeHTML()}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={get_css_string(css_object)}
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

        <div className="code-display" >
          <div className="container">
            <div className="square" style={{left: square.x, top:square.y}}>
            <span className="name">.square</span>
            </div>
          </div>
          <HorizontalMeasure x={horizontal_measure.x} y = {horizontal_measure.y} length={horizontal_measure.length}/>
          <VerticalMeasure x={vertical_measure.x} y = {vertical_measure.y} length={vertical_measure.length}/>

        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;