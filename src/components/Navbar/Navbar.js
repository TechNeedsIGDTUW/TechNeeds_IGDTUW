import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is present
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
        <li><Link to="/faq">FAQs</Link></li> {/* Updated to use Link */}
       
      </ul>
    </nav>
  );
}

export default Navbar;
