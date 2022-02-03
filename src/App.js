import {useRef} from "react"
import './scss/custom.scss';

function App() {

  return (
    <div className="App">
      
      <div className="header">

        <div className="links">
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Test</a>
          <a href="">Link</a>
          <a href="">Link</a>
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
            <a className="logo" href="https://www.google.com">
              <img className="col-1 row-1" src="./svg/HTML5.svg" alt="" />
              <p>HTML5</p>
            </a>
            <a className="logo" >
              <img className="col-2 row-1" src="./svg/CSS3.svg" alt="" />
              <p>CSS3</p>
            </a>
            <a className="logo">
              <img className="col-3 row-1" src="./svg/JS.svg" alt="" />
              <p>Javascript</p>
            </a>
            <a className="logo">
              <img className="col-1 row-2" src="./svg/sass.svg" alt="" />
              <p>Sass</p>
            </a>
            <a className="logo">
              <img className="col-2 row-2" src="./svg/React.svg" alt="" />
              <p>React.js</p>
            </a>
            <a className="logo">
              <img className="col-3 row-2" src="./svg/Bootstrap.svg" alt="" />
              <p>Bootstrap</p>
            </a>
          </div>

          <h3 className="mt-5">back end</h3>
          <div className="back-end stack">
            <a className="logo">
              <img className="col-1 row-1" src="./svg/mongo.svg" alt="" />
              <p>MongoDB</p>
            </a>
            <a className="logo">
              <img className="col-2 row-1" src="./svg/node.svg" alt="" />
              <p>Node.js</p>
            </a>
            <a className="logo">
              <img className="col-3 row-1" src="./svg/python.svg" alt="" />
              <p>Python</p>
            </a>
          </div>

          <h3 className="mt-5">dev ops</h3>
          <div className="dev-ops stack">
            <div className="logo">
              <img className="col-1 row-1" src="./svg/git.svg" alt="" />
              <p>Git</p>
            </div>
            <div className="logo">
              <img className="col-2 row-1" src="./svg/Docker.svg" alt="" />
              <p>Docker</p>
            </div>

          </div>

          <div className="tech-stack">
            <h2>Connect with me</h2>
          </div>
          <div className="socials stack mb-5">
              <div className="logo">
                <img className="col-1 row-1" src="./svg/youtube.svg" alt="" />
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
        footer
      </div>
    </div>
  );
}

export default App;