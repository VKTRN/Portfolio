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
          <a href="/">About</a>
          <a href="/">Experience</a>
          <a href="/">Showcase</a>
          <a href="/">Contact</a>
          <a id = 'resume' href="/resume">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Header;