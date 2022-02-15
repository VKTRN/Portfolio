import {useState} from "react"
import React from 'react';

// import '../scss/custom.scss';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Editor from '../components/Editor'

const initial_html = "<div class='container'></div>"
// const initial_css = ".container{\n\tbackground-color: blue;\n}"
const initial_css = ".container{\n\tbackground-color: white;\n\twidth: 100px;\n\tposition: relative;\n\ttop: 100px;\n\tleft: 100px;\n}"

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
        <div className="pane top-pane">
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

        <div className="pane" >
          <div className="element container" style={{ backgroundColor:getProperty("background-color", "container"), 
                                              height:getProperty("height", "container"),
                                              width:getProperty("width", "container"),
                                              position:getProperty("position", "container"),
                                              top:getProperty("top", "container"),
                                              left:getProperty("left", "container"),
                                            }}>B
          </div>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Blog;