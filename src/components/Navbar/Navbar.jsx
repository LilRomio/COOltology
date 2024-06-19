import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from '../Nav';
import './Navbar.scss';

const menu = {
  open: {
    width: '480px',
    height: '650px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '100px',
    height: '40px',
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const sectionRefs = useRef([]);

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
          <motion.div className="menu" variants={menu} animate={isActive ? 'open' : 'closed'} initial="closed">
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
