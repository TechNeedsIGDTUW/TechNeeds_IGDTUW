import React, { useState, useEffect } from 'react';
import Faq from '../components/FAQnTest/FAQ'; 
import Footer from '../components/Footer/Footer'; 
import Navbar from '../components/Navbar/Navbar'; 
import Testimonials from '../components/FAQnTest/Testimonials';
import Mobile from '../components/MobileNavbar/mobile'; 

const Test = () => {
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
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Test;
