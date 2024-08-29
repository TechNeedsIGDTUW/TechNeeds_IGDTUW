import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/team';
import Mobile from '../components/MobileNavbar/mobile'; 



function MeetOurTeam() {
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
      <Team />
      <Footer />
      </div>
    
  );
}

export default MeetOurTeam;

