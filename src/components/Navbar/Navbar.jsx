import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from '../Nav';
import './Navbar.scss';

const getMenuVariants = (isMobile) => ({
  open: {
    width: isMobile ? '320px' : '480px',
    height: isMobile ? '400px' : '650px',
    top: isMobile ? '10px' : '-25px',
    right: isMobile ? '80px' : '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: isMobile ? '70px' : '100px',
    height: isMobile ? '30px' : '40px',
    top: '0px',
    right: isMobile ? '-25px' : '0px',
    transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
});

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bgColor = window.getComputedStyle(entry.target).backgroundColor;
          setIsLightBackground(bgColor === 'rgb(255, 255, 255)'); // Check for white background
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const menuVariants = getMenuVariants(isMobile);

  return (
    <>
      <nav className="app__navbar">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="logo"
        >
          <a href="/">
            <img src={isLightBackground ? '/logo.png' : '/logo-white.png'} alt="logo" />
          </a>
        </motion.div>
        <div className="header">
          <motion.div className="menu" variants={menuVariants} animate={isActive ? 'open' : 'closed'} initial="closed">
            <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
          </motion.div>
          <Button
            isActive={isActive}
            toggleMenu={() => {
              setIsActive(!isActive);
            }}
          />
        </div>
      </nav>
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="background-section"
        style={{ height: '100vh', backgroundColor: 'white' }}
      >
        {/* Your white background section content */}
      </div>
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="background-section"
        style={{ height: '100vh', backgroundColor: 'black' }}
      >
        {/* Your black background section content */}
      </div>
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="background-section"
        style={{ height: '100vh', backgroundColor: 'white' }}
      >
        {/* Your white background section content */}
      </div>
      <div className="content">{/* Your main content */}</div>
    </>
  );
};

export default Navbar;
