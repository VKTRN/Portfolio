import React from 'react';
import SocialButton from "../components/Home/SocialButton"
import Header from "../components/Home/Header"
import {LogoGrid} from "../components/Home/LogoGrid"
import { About } from '../text/Text';

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
                I like to write clean, readable, reusable code and deliver a smooth and intuitive user experience.
              </p>
            </div>
          </div>

          <div className="about">
            <h1>About</h1>
            <div className="about-wrapper">
              <div className="description">
                <div className="wrapper">
                  <About/>
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
        <div className="footer">
          <span>
             
            <a href="https://github.com/VKTRN/Portfolio">Designed & Built by Viktor Niedens - 2022</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;