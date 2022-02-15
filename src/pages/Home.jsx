import {useState, useRef, useEffect, useContext} from "react"
import React from 'react';

// import '../scss/custom.scss';
import StackItem from "../components/StackItem"
import SocialButton from "../components/SocialButton"
import Header from "../components/Header"
import Footer from "../components/Footer"

const text_html      = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css       = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css" 
const text_js        = "JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript " 
const text_bootstrap = "bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap bootstrap "

function Home() {

  const [open, set_open] = useState(Array(12))

  return (
    <div className="Home">
      <Header></Header>

      <div className="home">
        <div className="content-container">

          <div className="introduction">
            <h1>Hi!</h1>
            <p>
              My name is Viktor.
            </p>
            <p>
              I am a front-end developer based in Hannover, Germany.
              <br/>
              I love to write clean and readable code and to <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">not repeat myself</a>.
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

          <h3 className="mt-5">back end</h3>
          <div className="front-end stack">
            <StackItem id="MongoDB" text={text_html} open={open} set_open={set_open} i={6}></StackItem>
            <StackItem id="Node"    text={text_css}  open={open} set_open={set_open} i={7}></StackItem>
            <StackItem id="Python"  text={text_js}   open={open} set_open={set_open} i={8}></StackItem>
          </div>

          <h3 className="mt-5">dev ops</h3>
          <div className="front-end stack">
            <StackItem id="Bash" text={text_html} open={open} set_open={set_open} i={9}></StackItem>
            <StackItem id="Git" text={text_html} open={open} set_open={set_open} i={10}></StackItem>
            <StackItem id="Docker"    text={text_css}  open={open} set_open={set_open} i={11}></StackItem>
          </div>

          <div className="tech-stack">
            <h2>Connect with me</h2>
          </div>  
          <div className="front-end stack socials">
            <SocialButton id="youtube" link="https://www.youtube.com"></SocialButton>
            <SocialButton id="twitter" link="https://www.twitter.com"></SocialButton>
            <SocialButton id="github"  link="https://www.github.com"></SocialButton>
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default Home;