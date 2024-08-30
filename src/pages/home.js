import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Mobile from '../components/MobileNavbar/mobile'; 
import Footer from '../components/Footer/Footer'; 
import Homepage from '../components/Home/homepage'; 
const Home = () => {
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
      <Homepage/>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
