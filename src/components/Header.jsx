import React from 'react';

function Header() {

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">vktrn.com</div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
    </div>
  );
}

export default Header;