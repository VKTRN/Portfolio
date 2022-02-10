import {useState, useRef, useEffect, useContext} from "react"
import './scss/custom.scss';
import Logo from "./components/Logo"

const text_html      = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css       = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css" 
const text_js        = "JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript " 
const text_bootstrap = "bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap "

function App() {

  const [open, set_open] = useState(["","","","","",""])

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

            <div className="front-end">

              <Logo id="HTML5"      open={open} set_open={set_open} i={0}></Logo>
              <Logo id="CSS3"       open={open} set_open={set_open} i={1}></Logo>
              <Logo id="JavaScript" open={open} set_open={set_open} i={2}></Logo>
              

              <Logo id="Sass"      open={open} set_open={set_open} i={3}></Logo>
              <Logo id="React" className="react"  open={open} set_open={set_open} i={4}></Logo>
              <Logo id="Bootstrap" open={open} set_open={set_open} i={5}></Logo> 

              <div id="HTML5-accordion" className={`accordion ${open[0]}`} >
                <div className="text">
                  {text_html}
                </div>
              </div>
              <div id="CSS3-accordion" className={`accordion ${open[1]}`}>
                <div className="text">
                  {text_css}
                </div>
              </div>
              <div id="JavaScript-accordion" className={`accordion ${open[2]}`}>
                <div className="text">
                  {text_js}
                </div>
              </div>

              <div id="Sass-accordion" className={`accordion ${open[3]}`} >
                <div className="text">
                  {text_html}
                </div>
              </div>
              <div id="React-accordion" className={`accordion ${open[4]}`}>
                <div className="text">
                  {text_css}
                </div>
              </div>
              <div id="Bootstrap-accordion" className={`accordion ${open[5]}`}>
                <div className="text">
                  {text_js}
                </div>
              </div>





            </div>




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