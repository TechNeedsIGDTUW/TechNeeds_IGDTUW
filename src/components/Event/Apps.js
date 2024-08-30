import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Mobile from '../components/MobileNavbar/mobile'; 
import Footer from '../components/Footer/Footer'; 
import Event from './Event';

const Apps = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div>
        {isMobile ? <Mobile /> : <Navbar />}
        <Navbar />
        <Event/>
        <Footer />
      </div>
    );
  };
  
  export default Apps;