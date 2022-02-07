import {useState, useRef, useEffect, useContext} from "react"
import './scss/custom.scss';

const text_html = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css csscss css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css csscss css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css csscss css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css csscss css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css "
const dummytext = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, vitae."

function App() {

  const ref = useRef()
  const buttonRef = useRef()
  const ref2 = useRef()

  function toggleAccordion(ref, text) {
    ref.current.classList.toggle("open")
    if (ref.current.children[0].childNodes.length > 0){
      const txt = ref.current.children[0].childNodes[0]
      ref.current.children[0].removeChild(txt)
    }
    console.log(ref.current.children[0].childNodes);
    ref.current.children[0].appendChild(document.createTextNode(text))
    
    ref.current.classList.contains("open") // if element is open, the handleOutsideClick listener should be activated. Else it should be removed.
		? document.addEventListener('click', handleOutsideClick, true)
		: document.removeEventListener('click', handleOutsideClick, true)
  }

  function handleHover(ref) {
    ref.current.classList.toggle("ready")
  }

  function handleOutsideClick(event) {
    // if user clicks outside, the menu gets closed and the outside-click eventlistener is removed.
    const clickedElement = event.target
  
    if (!ref.current.contains(clickedElement) && !buttonRef.current.contains(clickedElement)) { // defines the elements that are not outside.
      ref.current.classList.remove("open")
      document.removeEventListener('click', handleOutsideClick, true)
    }
  }

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
            <div className="front-end-row top">
              <a className="logo" ref={buttonRef} onClick={() => toggleAccordion(ref, text_html)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-1 row-1" src="./svg/HTML5.svg" alt="" />
                <p>HTML5</p>
              </a>
              <a className="logo"   onClick={() => toggleAccordion(ref, text_css)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-2 row-1" src="./svg/CSS3.svg" alt="" />
                <p>CSS3</p>
              </a>
              <a className="logo"  onClick={() => toggleAccordion(ref, text_html)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-3 row-1" src="./svg/JS.svg" alt="" />
                <p>Javascript</p>
              </a>
            </div>
            <div ref={ref} className="accordion">
              <div className="text">
                
              </div>
            </div>
            <div className="front-end-row bottom">
              <a className="logo"  onClick={() => toggleAccordion(ref, text_html)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-1 row-2" src="./svg/sass.svg" alt="" />
                <p>Sass</p>
              </a>
              <a className="logo"  onClick={() => toggleAccordion(ref, text_html)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-2 row-2" src="./svg/React.svg" alt="" />
                <p>React.js</p>
              </a>
              <a className="logo"  onClick={() => toggleAccordion(ref, text_html)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-3 row-2" src="./svg/Bootstrap.svg" alt="" />
                <p>Bootstrap</p>
              </a>
            </div>

          </div>

          <h3 className="mt-5">back end</h3>
          <div className="back-end stack">
            <div className="back-end-row">
              <a className="logo" onClick={() => toggleAccordion(ref, text_html2)} onMouseEnter={() => handleHover(ref2)} onMouseLeave={() => handleHover(ref2)}>
                <img className="col-1 row-1" src="./svg/mongo.svg" alt="" />
                <p>MongoDB</p>
              </a>
              <a className="logo" onClick={() => toggleAccordion(ref, text_html2)} onMouseEnter={() => handleHover(ref2)} onMouseLeave={() => handleHover(ref2)}>
                <img className="col-2 row-1" src="./svg/node.svg" alt="" />
                <p>Node.js</p>
              </a>
              <a className="logo" onClick={() => toggleAccordion(ref, text_html2)} onMouseEnter={() => handleHover(ref2)} onMouseLeave={() => handleHover(ref2)}>
                <img className="col-3 row-1" src="./svg/python.svg" alt="" />
                <p>Python</p>
              </a>

            </div>
            <div ref={ref2} className="accordion">
              <div className="text">
                {dummytext}
              </div>
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