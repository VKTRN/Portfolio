import React      from 'react'
import {useState} from 'react'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'
import {useWindowDimensions} from '../../hooks/useWindowDimensions'
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
    {name:'Sass',       logo: <FaSass/>}, 
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
    {name:'Typescript',  logo: <SiTypescript/>}, 
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
  const [disabled, setDisabled] = useState(false)
  const {innerWidth: width, innerHeight: height} = window;
  console.log(width)

  const nextSlide = (e) => {
      setDisabled(true)
      setTimeout(() => {setDisabled(false)}, 1000)
      setDirection('left')
      setSlide(prev => prev + 1)
      e.target.disabled = true
  }
  
  const prevSlide = () => {
    setDisabled(true)
    setTimeout(() => {setDisabled(false)}, 1000)
    setDirection('right')
    setSlide(prev => prev - 1)
  }

  const getSlideClassNames = () => {
    const slides = [null, null, null]

    if (index === 0){
      slides[2] = direction === 'left' ? 'inactive-left ontop':'inactive-left'
      slides[0] = 'active'
      slides[1] = direction === 'right' ? 'inactive-right ontop':'inactive-right'
    }
  
    if (index === 1){
      slides[0] = direction === 'left' ? 'inactive-left ontop':'inactive-left'
      slides[1] = 'active'
      slides[2] = direction === 'right' ? 'inactive-right ontop':'inactive-right'
    }
  
    if (index === 2){
      slides[1] = direction === 'left' ? 'inactive-left ontop':'inactive-left'
      slides[2] = 'active'
      slides[0] = direction === 'right' ? 'inactive-right ontop':'inactive-right'
    }
    return slides
  }

  const index  = slide % 3
  const slides = getSlideClassNames()

  return(
    <div className="slider dark-surface">
      
      <div className = 'content'>
        
        <h2 className = 'title'>{experiences[index].title}</h2>
        
        <div className = 'company'>
          <h3 >@{experiences[index].company}</h3>
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

      {width > 1200 &&
        <div className="slides">
          <div className={slides[0] + ' container a'}><img src = './audi.png'></img></div>
          <div className={slides[1] + ' container b'}><img src = './bmw.jpg'></img></div>
          <div className={slides[2] + ' container c'}><img src = './mercedes.jpg'></img></div>
        </div>
      }

      
      <button className = 'button' id='button-right'  disabled = {disabled} onClick = {(e) => {nextSlide(e)}}>
        <BiRightArrow/>
      </button>
      <button className = 'button' id='button-left'  disabled = {disabled} onClick = {(e) => {prevSlide(e)}}>
        <BiLeftArrow/>
      </button>
    </div>
  )
}

export default Slider;