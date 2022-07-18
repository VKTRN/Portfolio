import React from 'react';
import {useEffect} from 'react'
import {useState} from 'react'

function Header() {

  const [visibility, setVisibility] = useState('visible')
  const [top, setTop] = useState('top')

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      console.log(window)
      console.log('scroll')
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
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/shop">Shop</a>
          <a href="/player">Player</a>
        </div>
      </div>
    </div>
  );
}

export default Header;