import React from 'react';
import SocialButton from "../components/Home/SocialButton"
import Header from "../components/Home/Header"
import {LogoGrid} from "../components/Home/LogoGrid"

const techList = [
  'Sass',
  'React',
  'Bootstrap',
  'CSS3',
  'JavaScript',
  'HTML5',
  'MongoDB',
  'Node',
  'Docker'
]

function Home() {

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
              <LogoGrid logos = {techList}/>
            </div>
          </div>

          <div className="socials-wrapper">
            <h2>Connect with me</h2>
            <div className="socials dark-surface">
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