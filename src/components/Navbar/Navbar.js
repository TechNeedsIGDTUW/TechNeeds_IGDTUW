/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'; // Ensure this import is present


function Navbar() {
  return (
    <nav>
      <img className="nav-img" src={logo}></img>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to="/">Home</Link></li>
        <li className='nav-li'><Link to="/team">Team</Link></li>
        <li className='nav-li'><Link to="/Apps">Events</Link></li>
        <li className='nav-li'><a href="#">Techboard</a></li>
        <li className='nav-li'><Link to="/faq">FAQs</Link></li> {/* Updated to use Link */}

      </ul>
    </nav>
  );
}

export default Navbar;
