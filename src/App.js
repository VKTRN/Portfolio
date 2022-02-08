import {useState, useRef, useEffect, useContext} from "react"
import './scss/custom.scss';
import Logo from "./components/Logo"

const text_html      = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css       = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css" 
const text_js        = "JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript " 
const text_bootstrap = "bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap "

function App() {

  const ref_accordion_1 = useRef()
  const ref_accordion_2 = useRef()
  const ref_accordion_3 = useRef()
  const ref_accordion_4 = useRef()

  const [accordion_text1, set_accordion_text1] = useState("")
  const [accordion_text2, set_accordion_text2] = useState("")
  const [accordion_text3, set_accordion_text3] = useState("")
  const [accordion_text4, set_accordion_text4] = useState("")

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

            <div id="row-1" className="front-end-row top">
              <Logo className="col-1 row-1" id="HTML5"      ref_accordion={ref_accordion_1} text={text_html} set_accordion_text = {set_accordion_text1} ></Logo>
              <Logo className="col-2 row-1" id="CSS3"       ref_accordion={ref_accordion_1} text={text_css}  set_accordion_text = {set_accordion_text1} ></Logo>
              <Logo className="col-3 row-1" id="JavaScript" ref_accordion={ref_accordion_1} text={text_js}   set_accordion_text = {set_accordion_text1} ></Logo>
            </div>

            <div id="accordion-1" ref={ref_accordion_1} className="accordion ">
              <div className="text">
                {accordion_text1}
              </div>
            </div>

            <div id="row-2" className="front-end-row bottom">
              <Logo className="col-1 row-2" id="Sass"      ref_accordion={ref_accordion_2} text={text_html}        set_accordion_text = {set_accordion_text2} ></Logo>
              <Logo className="col-2 row-2" id="React.js"  ref_accordion={ref_accordion_2} text={text_css}         set_accordion_text = {set_accordion_text2} ></Logo>
              <Logo className="col-3 row-2" id="Bootstrap" ref_accordion={ref_accordion_2} text={text_bootstrap}   set_accordion_text = {set_accordion_text2} ></Logo>
            </div>

            <div id="accordion-2" ref={ref_accordion_2} className="accordion accordion-bottom">
              <div className="text">
                {accordion_text2}
              </div>
            </div>

          </div>

          <h3 className="mt-5">back end</h3>
          <div className="back-end stack">
            <div id="row-3" className="back-end-row">
              <Logo className="col-1 row-1" id="MongoDB" ref_accordion={ref_accordion_3} text={text_html}        set_accordion_text = {set_accordion_text3} ></Logo>
              <Logo className="col-2 row-1" id="Node.js" ref_accordion={ref_accordion_3} text={text_css}         set_accordion_text = {set_accordion_text3} ></Logo>
              <Logo className="col-3 row-1" id="Python"  ref_accordion={ref_accordion_3} text={text_bootstrap}   set_accordion_text = {set_accordion_text3} ></Logo>
            </div>

            <div id="accordion-3" ref={ref_accordion_3} className="accordion accordion-bottom">
              <div className="text">
                {accordion_text3}
              </div>
            </div>

          </div>

          <h3 className="mt-5">dev ops</h3>
          <div className="dev-ops stack">
            <div  id="row-4"  className="dev-ops-row">
              <Logo className="col-1 row-1" id="git"     ref_accordion={ref_accordion_4} text={text_html}        set_accordion_text = {set_accordion_text4} ></Logo>
              <Logo className="col-2 row-1" id="Docker"  ref_accordion={ref_accordion_4} text={text_css}         set_accordion_text = {set_accordion_text4} ></Logo>
            </div>

            <div id="accordion-4" ref={ref_accordion_4} className="accordion accordion-bottom">
                <div className="text">
                  {accordion_text4}
                </div>
            </div>

          </div>

          <div className="tech-stack">
            <h2>Connect with me</h2>
          </div>
          <div className="socials stack mb-5">
              <div className="logo">
                <img className="col-1 row-1 youtube" src="./svg/youtube.svg" alt="" />
              </div>
              <div className="logo">
                <img className="col-2 row-1" src="./svg/twitter.svg" alt="" />
              </div>
              <div className="logo">
                <img className="col-2 row-1 white-svg" src="./svg/github.svg" alt="" />
              </div>
          </div>
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