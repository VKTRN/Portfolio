import React from 'react';
import {useEffect} from 'react'
import {useState} from 'react'

function Header() {

  const [visibility, setVisibility] = useState('visible')
  const [top, setTop] = useState('top')

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setVisibility('visible')
      }
      else {
        setVisibility('shown')
      }
      if(currentScrollPos === 0) {
        setTop('top')
      }
      else{
        setTop('not-top')
      }
      prevScrollpos = currentScrollPos;
    }

    

    window.onscroll = handleScroll;
    window.ontouchmove = handleScroll;
  }, [])

  return (
    <div className={`header ${visibility} ${top}`}>
      <div className="header-content">
        <div className="logo">vktrn</div>
        <div className="links">
          <a href="/#about">About</a>
          <a href="/#experience">Experience</a>
          <a href="/#showcase">Showcase</a>
          <a href="/#contact">Contact</a>
          <a id = 'resume' href="/resume">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Header;