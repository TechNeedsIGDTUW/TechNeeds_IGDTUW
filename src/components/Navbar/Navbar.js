import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav>
      <img src={logo}></img>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Techboard</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
