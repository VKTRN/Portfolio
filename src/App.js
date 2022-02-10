import {useState, useRef, useEffect, useContext} from "react"
import './scss/custom.scss';
import Logo from "./components/Logo"
import Accordion from "./components/Accordion"
import StackItem from "./components/StackItem"

const text_html      = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css       = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css" 
const text_js        = "JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript " 
const text_bootstrap = "bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap "



function App() {

  const [open, set_open] = useState(Array(6))

  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <div className="logo">vktrn.com</div>
          <div className="links">
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content-container">

          <div className="introduction">
            <h1>Hi!</h1>
            <p>
              My name is Viktor.
            </p>
            <p>
              I am a front-end developer based in Hannover, Germany.
            </p>
          </div>

          <div className="tech-stack">
            <h2>My Tech Stack</h2>
          </div>

          <h3 className="mt-5">front end</h3>
          <div className="front-end stack">
            <StackItem id="HTML5"      text={text_html} open={open} set_open={set_open} i={0}></StackItem>
            <StackItem id="CSS3"       text={text_css}  open={open} set_open={set_open} i={1}></StackItem>
            <StackItem id="JavaScript" text={text_js}   open={open} set_open={set_open} i={2}></StackItem>
            <StackItem id="Sass"       text={text_html} open={open} set_open={set_open} i={3}></StackItem>
            <StackItem id="React"      text={text_css}  open={open} set_open={set_open} i={4}></StackItem>
            <StackItem id="Bootstrap"  text={text_js}   open={open} set_open={set_open} i={5}></StackItem>
          </div>

          {/* <h3 className="mt-5">back end</h3> */}


          {/* <h3 className="mt-5">dev ops</h3>


          <div className="tech-stack">
            <h2>Connect with me</h2>
          </div> */}
          {/* <div className="socials stack mb-5">
              <div className="logo">
                <img className="col-1 row-1 youtube" src="./svg/youtube.svg" alt="" />
              </div>
              <div className="logo">
                <img className="col-2 row-1" src="./svg/twitter.svg" alt="" />
              </div>
              <div className="logo">
                <img className="col-2 row-1 white-svg" src="./svg/github.svg" alt="" />
              </div>
          </div> */}
        </div>
      </div>

      <div className="footer">
        <a href="">Terms&Conditions</a>
        <a href="">Privacy Policy</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default App;