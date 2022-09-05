import React      from 'react'
import {useState} from 'react'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'

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
import {Eleventy}      from './Eleventy'
import {Draftjs}       from './Draftjs'

const experience1 = {
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
    {name:'Sass',       logo:  <FaSass/>}, 
    {name:'Cypress.io', logo: <SiCypress/> },
    {name:'Docker',     logo: <FaDocker/> }
  ]
}

const experience2 = {
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
    {name:'Typescript',  logo:  <SiTypescript/>}, 
    {name:'Sass',        logo: <FaSass/> },
    {name:'MongoDB',     logo: <DiMongodb/> },
    {name:'Express',     logo: <IoLogoNodejs/> }
  ]

}

const experience3 = {
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
  ]
}

const experiences = [experience1, experience2, experience3]


function Slider(){

  const [slide, setSlide] = useState(999)
  const [direction, setDirection] = useState('left')

  const nextSlide = () => {
    setDirection('left')
    setSlide(prev => prev + 1)
  }
  
  const prevSlide = () => {
    setDirection('right')
    setSlide(prev => prev - 1)
  }

  let slide1
  let slide2
  let slide3

  const index = slide % 3

  if (index === 0){
    slide3 = direction === 'left' ? 'inactive-left ontop':'inactive-left'
    slide1 = 'active'
    slide2 = direction === 'right' ? 'inactive-right ontop':'inactive-right'

  }

  if (index === 1){
    slide1 = direction === 'left' ? 'inactive-left ontop':'inactive-left'
    slide2 = 'active'
    slide3 = direction === 'right' ? 'inactive-right ontop':'inactive-right'
  }

  if (index === 2){
    slide2 = direction === 'left' ? 'inactive-left ontop':'inactive-left'
    slide3 = 'active'
    slide1 = direction === 'right' ? 'inactive-right ontop':'inactive-right'
  }

  return(
    <div className="slider dark-surface">
      <div className = 'content'>
        <h2 className = 'title'>{experiences[index].title}</h2>
        <div className = 'flex jc-sb'>
          <h3>@{experiences[index].company}</h3>
          <div className = 'flex column jc-c'>
            <span>{experiences[index].date}</span>
          </div>
        </div>

        <h4 className = 'project'>{experiences[index].project}</h4>

        <ul className = 'bullets'>
          {experiences[index].bullets.map((bullet, index) => {
            return <li key = {index}>{bullet}</li>
          })}
        </ul>
        <div className = 'tech-stack-wrapper'>
          <div className = 'tech-stack'>
            {
              experiences[index].techStack.map((tech) => {
                return (
                  <div className = 'tech-wrapper'>
                    <div className = 'tech'>
                      {tech.logo}
                      <span>{tech.name}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        
      </div>
      <div className="slides">
        <div className={slide1 + ' container a'}><img src = './audi.png'></img></div>
        <div className={slide2 + ' container b'}><img src = './bmw.jpg'></img></div>
        <div className={slide3 + ' container c'}><img src = './mercedes.jpg'></img></div>
      </div>
      
      <BiRightArrow className = 'button' id='button-right'  onClick = {nextSlide}/>
      <BiLeftArrow className = 'button' id='button-left'  onClick = {prevSlide}/>
      {/* <button id='button-left'  onClick = {prevSlide}></button> */}
      {/* <button id='button-right' onClick = {nextSlide}></button> */}
    </div>
  )
}

export default Slider;