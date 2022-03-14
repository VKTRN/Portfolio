import {useState, useRef, useEffect} from "react"
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

function getDimensions(selector){
  return document.querySelector(selector).getBoundingClientRect()
}

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

function setPropertyValue(css_object, selector, property, value){
  let declaration   = getDeclaration(css_object, selector, property)
  declaration.value = value
  
  return css_object
}

function changeProperty(css_object, selector, property, new_property){
  let declaration      = getDeclaration(css_object, selector, property)
  declaration.property = new_property
  
  return css_object
}

function make_css_object(){
  
  let rule_container = add_rule(".square")
  rule_container     = add_declaration(rule_container, "position", "absolute")
  rule_container     = add_declaration(rule_container, "left", "100px")
  rule_container     = add_declaration(rule_container, "top", "100px")

  let rule_square = add_rule(".container")
  rule_square     = add_declaration(rule_square, "background-color", "red")

  let css_object = [rule_container, rule_square]

  return css_object
}


function Blog() {

  // function setPropertyValue(value, property, selector){
  //   const selectorStringStart = css.indexOf(selector) // find index, where the demanded selector begins in the string
  //   const selectorStringEnd   = css.slice(selectorStringStart).indexOf("}")+selectorStringStart // find index, where the demanded selector ends in the string
  //   const substring            = css.slice(selectorStringStart, selectorStringEnd) // get substring of only the selector 
  //   const start               = substring.indexOf(property)+property.length+1 // get index of where the value of the property begins
  //   const end                 = substring.slice(start).indexOf(";") + start // get index of where the value of the property ends
  //   const newString           = css.slice(0, selectorStringStart+start) + " " + value + css.slice(selectorStringStart + end) // replace the value
    
  //   setCss(newString)
  // }

  // function changeProperty(newProperty, property, selector){
  //   const selectorStringStart = css.indexOf(selector) // find index, where the demanded selector begins in the string
  //   const selectorStringEnd   = css.slice(selectorStringStart).indexOf("}")+selectorStringStart // find index, where the demanded selector ends in the string
  //   const cssString           = css.slice(selectorStringStart, selectorStringEnd) // get substring of only the selector 
  //   const start               = cssString.indexOf(property) // get index of where the property begins
  //   const end                 = cssString.slice(start).indexOf(":") + start // get index of where the property ends
  //   const newString           = css.slice(0, selectorStringStart+start) + newProperty + css.slice(selectorStringStart + end) // replace the value
    
  //   setCss(newString)
  // }

  // function move(direction){
  //   switch (direction) {
  //     case "left":
  //       setPropertyValue(toPixel(horizontal.value -50), horizontal.property, "square")
  //       break;
  //     case "right":
  //       setPropertyValue(toPixel(horizontal.value+ 50), horizontal.property, "square")
  //       break;
  //     case "up":
  //       setPropertyValue(toPixel(vertical.value -50),vertical.property, "square")
  //       break;
  //     case "down":
  //       setPropertyValue(toPixel(vertical.value+ 50), vertical.property, "square")
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // function toggleHorizontal(){
  //   if(horizontal.property === "left"){
  //     set_css_object(changeProperty(css_object, ".square", "right", "left"))
  //   }
  //   else{
  //     set_css_object(changeProperty(css_object, ".square", "left", "right"))
  //   }
  // }

  // function toggleVertical(){
  //   if(vertical.property === "top"){
  //     set_css_object(changeProperty(css_object, ".square", "bottom", "top"))
  //   }
  //   else{
  //     set_css_object(changeProperty(css_object, ".square", "top", "bottom"))
  //   }
  // }

  const [css_object, set_css_object]   = useState(make_css_object)
  const window          = useWindowDimensions()
  
  // let vertical           = {}
  // let horizontal         = {}
  // let position           = "relative"
  // let horizontal_helper  = {left:"default", right:"default", top:"default", bottom:"default",height:1}
  // let vertical_helper    = {left:"default", right:"default", top:"default", bottom:"default",height:1}
  // let container          = {}
  // let body               = {}
  // let horizontal_measure = {}
  // let vertical_measure   = {}
  // let square             = {}

  // horizontal.value = pixelToNum(getPropertyValue(css, horizontal.property, "square"))
  // vertical.value   = pixelToNum(getPropertyValue(css, vertical.property, "square"))
  // position         = getPropertyValue("position", "container")
  
  // const y_square    = vertical.property === "top"?  y + vertical.value : y - vertical.value - 70
  // const y_measure_x = vertical.property === "top"?  y + vertical.value + 35 : y - vertical.value - 35
  // const y_measure_y = vertical.property === "top"?  y : y - vertical.value
  
  // if(horizontal.property === "left"){
  //   square.left             = container.left + horizontal.value
  //   horizontal_measure.left = container.left
  //   vertical_measure.left   = container.left + horizontal.value + 35
  // }
  // else{
  //   const x_square    =   x - horizontal.value - 70
  //   const x_measure_x =   x - horizontal.value
  //   const x_measure_y =   x - horizontal.value - 35
  // }
  
  




  useEffect(() => {

    // sets the offset of the lines with respect to the property position of the .container 
    // whenever position is changed

    // const selector   = position === "static" ? ".code-display" : ".container"
    const container_dimensions = getDimensions(".container")
    console.log(container_dimensions);
    set_body(getDimensions(".code-display"))
    
    const container_ = 
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
    
    set_container(container_)
    console.log(container);
    
    horizontal.property === "left"? set_x(container.left) : set_x(container.right)
    vertical.property === "top"? set_y(container.top) : set_y(container.bottom)

    const is_above      = y_measure_x < container.center.y 
    const is_left       = x_measure_y < container.center.x 
    const is_underneath = !is_above
    const is_right      = !is_left
    const is_outside_y  = y_measure_x < container.top  || y_measure_x > container.bottom
    const is_outside_x  = x_measure_y < container.left || x_measure_y > container.right
  
    if (is_underneath) {
      const opacity = is_outside_y? 1:0
      const h = vertical.property === "top"? Math.max(vertical.value + 45 - container.height, 0) : - vertical.value - 25
      set_styleHelperX({left:x, right:"initial", top:container.bottom, bottom:"initial",height:h, opacity:opacity})
    } else {
      const opacity = is_outside_y? 1:0
      const h = vertical.property === "top"? Math.max(Math.abs(vertical.value) -25,0) : vertical.value + 45 - container.height
      set_styleHelperX({left:x, right:"initial", top:"initial", bottom:window.height - container.top, height:h, opacity:opacity})
    }

    if (is_right) {
      const opacity = is_outside_x? 1:0
      const h = horizontal.property === "left"? Math.max(horizontal.value + 45 - container.width, 0) : - horizontal.value - 25
      set_styleHelperY({top:y, bottom:"initial", left:container.right, right:"initial",width:h, opacity:opacity})
    } else {
      const opacity = is_outside_x? 1:0
      const h = horizontal.property === "left"? Math.max(Math.abs(horizontal.value) -25,0) : horizontal.value + 45 - container.width
      set_styleHelperY({top:y, bottom:"initial", left:"initial", right:window.width - container.left, width:h, opacity:opacity})
    }

    
  }, [position, window, horizontal, vertical])
  
  const style_square = {left: x_square, top:y_square}

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
            value={makeHTML()}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={get_css_string(css)}
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
          {/* <span className="name">body</span> */}
          {/* <div className="container" style={{ position: position}}> */}
          <div className="container">
            <div className="square" style={style_square}>
              <span className="name">.square</span>
            </div>
          </div>
          {/* <span className="name2">.container</span> */}
          <HorizontalMeasure x={x_measure_x} y = {y_measure_x} length={horizontal.value}/>
          <VerticalMeasure x={x_measure_y} y = {y_measure_y} length={vertical.value}/>
          <HelperLineX style={styleHelperX}/>
          <HelperLineY style={styleHelperY}/>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;