import React from 'react';
import {useEffect} from 'react'
import {useState} from 'react'

function Header() {

  const [visibility, setVisibility] = useState('visible')
  const [top, setTop] = useState('top')

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
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