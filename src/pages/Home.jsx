import {useState} from "react"
import React from 'react';
import Logo from '../components/Logo'

// import '../scss/custom.scss';
import StackItem from "../components/StackItem"
import SocialButton from "../components/SocialButton"
import Header from "../components/Header"
import Footer from "../components/Footer"

const text_html      = "html html html html html html html html html html html html html html html html html html html html html html html html html html "
const text_css       = "css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css css" 
const text_js        = "JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript " 

function Home() {

  const [open, set_open] = useState(Array(12))

  return (
    <div className="Home">
      <Header></Header>

      <div className="home">
        

          <div className="introduction">
            <div className="wrapper">
              <h1>
                Hi, I'm Viktor.
              </h1>
              <p>
                I am a software engineer based in Hannover, Germany. I specialize in fullstack web development with a focus on frontend development. 
                I like to write clean, readable, reusable code and deliver a smooth user experience.
              </p>
            </div>
          </div>

          <div className="about">
            <h1>About</h1>
            <div className="about-wrapper">
              <div className="description">
                <div className="wrapper">
                  Hello! My name is Viktor and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                  I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                </div>
              </div>
              <div className="techstack">
                <div className="wrapper">
                  <div className="grid">
                    <Logo name = 'Sass'/>
                    <Logo name = 'React'/>
                    <Logo name = 'Bootstrap'/>
                    <Logo name = 'CSS3'/>
                    <Logo name = 'JavaScript'/>
                    <Logo name = 'HTML5'/>
                    <Logo name = 'MongoDB'/>
                    <Logo name = 'Node'/>
                    <Logo name = 'Docker'/>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="socials-wrapper">
            <h2>Connect with me</h2>
            <div className="socials">
                <SocialButton id="youtube" link="https://www.youtube.com"></SocialButton>
                <SocialButton id="twitter" link="https://www.twitter.com"></SocialButton>
                <SocialButton id="github"  link="https://github.com/VKTRN"></SocialButton>
            </div>
          </div>
        
      </div>
      
    </div>
  );
}

export default Home;