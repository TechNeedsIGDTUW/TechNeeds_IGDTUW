import React, { useState } from 'react';
import './mobile.css';
import logo from '../../assets/logo.png'

function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-container">
      <div className="wrapper">
        <header id="header" className="header">
          <nav className="menu-navigation">
            <a 
              href="#" 
              className={`menu-icon-toggle ${isOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
            >
              <span></span>
            </a>
            <img className="nav-img" src={logo}></img>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
              <li><a href="/">Home</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Techboard</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Mobile;
