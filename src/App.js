import {useState, useRef, useEffect, useContext} from "react"
import './scss/custom.scss';
import Logo from "./components/Logo"

const text_html = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css" 
const text_js = "JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript " 




function App() {

  const ref_accordion_1 = useRef()
  const ref_accordion_2 = useRef()

  const [currentText, set_currentText] = useState(null)

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
              <Logo className="col-1 row-1" id="HTML5"      ref_accordion={ref_accordion_1} text={text_html}></Logo>
              <Logo className="col-2 row-1" id="CSS3"       ref_accordion={ref_accordion_1} text={text_css}></Logo>
              <Logo className="col-3 row-1" id="JavaScript" ref_accordion={ref_accordion_1} text={text_js}></Logo>
            </div>
            <div id="accordion-1" ref={ref_accordion_1} className="accordion">
              <div className="text"></div>
            </div>
            <div id="row-2" className="front-end-row bottom">
              <Logo className="col-1 row-2" id="Sass"      ref_accordion={ref_accordion_2} text={text_html}></Logo>
              <Logo className="col-2 row-2" id="React.js"  ref_accordion={ref_accordion_2} text={text_css}></Logo>
              <Logo className="col-3 row-2" id="Bootstrap" ref_accordion={ref_accordion_2} text={text_js}></Logo>
            </div>
            <div id="accordion-2" ref={ref_accordion_2} className="accordion">
              <div className="text"></div>
            </div>
          </div>

          <h3 className="mt-5">back end</h3>
          <div className="back-end stack">
            <div className="back-end-row">
              <a className="logo" >
                <img className="col-1 row-1" src="./svg/mongo.svg" alt="" />
                <p>MongoDB</p>
              </a>
              <a className="logo" >
                <img className="col-2 row-1" src="./svg/node.svg" alt="" />
                <p>Node.js</p>
              </a>
              <a className="logo" >
                <img className="col-3 row-1" src="./svg/python.svg" alt="" />
                <p>Python</p>
              </a>

            </div>
          </div>

          <h3 className="mt-5">dev ops</h3>
          <div className="dev-ops stack">
            <div className="dev-ops-row">
              <div className="logo">
                <img className="col-1 row-1" src="./svg/git.svg" alt="" />
                <p>Git</p>
              </div>
              <div className="logo">
                <img className="col-2 row-1" src="./svg/Docker.svg" alt="" />
                <p>Docker</p>
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