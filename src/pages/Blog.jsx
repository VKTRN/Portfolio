import {useState} from "react"
import React from 'react';

import Header from "../components/Header"
import Footer from "../components/Footer"
import Editor from '../components/Editor'

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
initial_css = addDeclaration(initial_css, "position", "absolute")
initial_css = addDeclaration(initial_css, "top", "100px")
initial_css = addDeclaration(initial_css, "left", "100px")
initial_css = closeSelector(initial_css)

function Blog() {

  const [html, setHtml] = useState(initial_html)
  const [css, setCss] = useState(initial_css)

  function getProperty(property, selector){
    const selectorStringStart = css.indexOf(selector)
    const selectorStringEnd = css.slice(selectorStringStart).indexOf("}")+selectorStringStart
    const cssString = css.slice(selectorStringStart, selectorStringEnd)
    const start = cssString.indexOf(property)+property.length+1
    const end   = cssString.slice(start).indexOf(";") + start
    const value = cssString.slice(start,end).replace(/\s/g, "")

    return value
  }

  return (
    <div className="Blog">
      <Header></Header>

      <div className="blog">

        <div className="text">
          <h2>Position: Absolute</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugiat reprehenderit, delectus et explicabo provident hic facere tempore cumque velit mollitia fugit quos molestiae harum quis, alias error magnam asperiores quisquam architecto culpa rerum maiores at! Delectus nemo, laudantium quibusdam iure dicta eius ullam obcaecati reprehenderit veniam, quod quidem dignissimos.
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

        <div className="code-display" >
          <div className="container" style={{ 
                                              position:        getProperty("position", "container"),
                                              top:             getProperty("top", "container"),
                                              left:            getProperty("left", "container"),
                                            }}>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;