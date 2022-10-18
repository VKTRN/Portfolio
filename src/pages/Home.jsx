import React from 'react';
import SocialButton from "../components/Home/SocialButton"
import Header from "../components/Home/Header"
import {LogoGrid} from "../components/Home/LogoGrid"
import Slider from "../components/Home/Slider"
import Demo from "../components/Home/Demo"
import ComingSoon from "../components/Home/ComingSoon"
import Project from "../components/Home/Project"
import { About } from '../text/Text';

import {IoLogoNodejs}  from 'react-icons/io'
import {SiTypescript}  from 'react-icons/si'
import {DiCss3}        from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {FaGitAlt}      from 'react-icons/fa'
import {SiWebpack}     from 'react-icons/si'
import {FaDocker}      from 'react-icons/fa'
import {FaHtml5}       from 'react-icons/fa'
import {FaSass}        from 'react-icons/fa'
import {SiCypress}     from 'react-icons/si'
import {SiJavascript}  from 'react-icons/si'
import {SiElectron}    from 'react-icons/si'
import {DiMongodb}     from 'react-icons/di'
import {Draftjs}       from '../components/Home/Draftjs'
import {Eleventy}      from '../components/Home/Eleventy'

const project1 = {
  title: 'Frontend Development',
  company: 'Treubrodt Consulting',
  date: 'since September 2021',
  project: 'Design unification of multiple user authentication systems for Volkswagen',
  bullets: [
    'Implemented the unified design for multiple user authentication pages.',
    'Wrote End to End tests for the authentication pages.',
    'Integrated the test-automation into the ci/cd pipeline in bamboo (Atlassian).'
  ],
  techStack: [
    {name:'Javascript', logo: <SiJavascript/>}, 
    {name:'HTML',       logo: <FaHtml5/>}, 
    {name:'Eleventy',   logo: <Eleventy/>}, 
    {name:'Sass',       logo: <FaSass/>}, 
    {name:'Cypress.io', logo: <SiCypress/> },
    {name:'Docker',     logo: <FaDocker/> }
  ],
  image: './audi.png'
}

const project2 = {
  title: 'Frontend Development',
  company: 'Treubrodt Consulting',
  date: 'since September 2021',
  project: 'Development of a document management system',
  bullets: [
    'Developing the frontend for creating, editing and managing company specific documents.',
    'Developing a backend for storing and accessing the documents.',
    'Implemented continuous integration using Github Actions.',
  ],
  techStack: [
    {name:'React.js',    logo: <RiReactjsLine/>}, 
    {name:'Electron.js', logo: <SiElectron/>}, 
    {name:'draft.js',    logo: <Draftjs/>}, 
    {name:'Typescript',  logo: <SiTypescript/>}, 
    {name:'Sass',        logo: <FaSass/> },
    {name:'MongoDB',     logo: <DiMongodb/> },
    {name:'Express',     logo: <IoLogoNodejs/> }
  ],
  image: './bmw.jpg'
}

const project3 = {
  title: 'Frontend Development',
  company: 'Treubrodt Consulting',
  date: 'since September 2021',
  project: 'Support of a content management system for CARIAD',
  bullets: [
    'Created and edited web-pages in the CARIAD Intranet.',
    'Fixed issues with the display of the content using HTML and CSS.',
  ],
  techStack: [
    {name:'HTML',    logo: <FaHtml5/>}, 
    {name:'CSS', logo: <DiCss3/>}, 
  ],
  image: './mercedes.jpg'
}


const techList = [
  'Sass',
  'React',
  'Webpack',
  'CSS3',
  'Typescript',
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

        <div className = 'experience-wrapper'>
          <h1>Experience</h1>
          <div className ='experience'>
            <Project project = {project1}/>
            <Project project = {project2}/>
            <Project project = {project3}/>
          </div>
        </div>

        <div className ='section'>
          <h1>Showcase Project</h1>
          <ComingSoon/>
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