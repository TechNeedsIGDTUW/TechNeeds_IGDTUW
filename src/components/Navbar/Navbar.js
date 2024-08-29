import React from 'react'; 
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-rose-500 p-4">
      <img src={logo} alt="Logo" className="h-10 inline-block" />
      <ul className="flex space-x-4 text-white">
        <li><a href="#" className="hover:text-gray-200">Home</a></li>
        <li><a href="#" className="hover:text-gray-200">Team</a></li>
        <li><a href="#" className="hover:text-gray-200">Events</a></li>
        <li><a href="#" className="hover:text-gray-200">Techboard</a></li>
        <li><a href="#" className="hover:text-gray-200">FAQs</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
