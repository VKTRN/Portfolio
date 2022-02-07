import {useState, useRef, useEffect, useContext} from "react"
import './scss/custom.scss';

const dummytext = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, incidunt sed, architecto similique dicta magnam esse, quo hic enim distinctio facilis libero quaerat commodi illo deleniti sunt dolorem tempora possimus. Placeat numquam repellat quod expedita, blanditiis voluptates? Veritatis consequuntur, asperiores voluptatibus doloremque dolor velit sed vero! Accusamus, similique reprehenderit? Repellendus!"

function App() {

  const ref = useRef()
  const ref2 = useRef()

  function toggleAccordion(ref) {
    ref.current.classList.toggle("open")
  }

  function handleHover(ref) {
    ref.current.classList.toggle("ready")
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
              <a className="logo" onClick={() => toggleAccordion(ref)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-1 row-1" src="./svg/HTML5.svg" alt="" />
                <p>HTML5</p>
              </a>
              <a className="logo"   onClick={() => toggleAccordion(ref)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-2 row-1" src="./svg/CSS3.svg" alt="" />
                <p>CSS3</p>
              </a>
              <a className="logo"  onClick={() => toggleAccordion(ref)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-3 row-1" src="./svg/JS.svg" alt="" />
                <p>Javascript</p>
              </a>
            </div>
            <div ref={ref} className="accordion">
              <div className="text">
                {dummytext}
              </div>
            </div>
            <div className="front-end-row bottom">
              <a className="logo"  onClick={() => toggleAccordion(ref)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-1 row-2" src="./svg/sass.svg" alt="" />
                <p>Sass</p>
              </a>
              <a className="logo"  onClick={() => toggleAccordion(ref)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-2 row-2" src="./svg/React.svg" alt="" />
                <p>React.js</p>
              </a>
              <a className="logo"  onClick={() => toggleAccordion(ref)} onMouseEnter={() => handleHover(ref)} onMouseLeave={() => handleHover(ref)}>
                <img className="col-3 row-2" src="./svg/Bootstrap.svg" alt="" />
                <p>Bootstrap</p>
              </a>
            </div>

          </div>

          <h3 className="mt-5">back end</h3>
          <div className="back-end stack">
            <div className="back-end-row">
              <a className="logo" onClick={() => toggleAccordion(ref2)} onMouseEnter={() => handleHover(ref2)} onMouseLeave={() => handleHover(ref2)}>
                <img className="col-1 row-1" src="./svg/mongo.svg" alt="" />
                <p>MongoDB</p>
              </a>
              <a className="logo" onClick={() => toggleAccordion(ref2)} onMouseEnter={() => handleHover(ref2)} onMouseLeave={() => handleHover(ref2)}>
                <img className="col-2 row-1" src="./svg/node.svg" alt="" />
                <p>Node.js</p>
              </a>
              <a className="logo" onClick={() => toggleAccordion(ref2)} onMouseEnter={() => handleHover(ref2)} onMouseLeave={() => handleHover(ref2)}>
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