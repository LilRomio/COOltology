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
    right: isMobile ? '0px' : '-25px',
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
          <div class="fixed_menu">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 731.66 240">
              <defs>
                <style type="text/css">
                  {`
                  .cls-1 { fill: #805ce5; }
                  .cls-1, .cls-2 { stroke-width: 0px; }
                  .cls-2 { fill: #ffffff; }
                `}
                </style>
              </defs>
              <path
                class="cls-2"
                d="M123.96,140.28c-.52,5.54-2.3,10.31-5.33,14.29-3.03,3.99-7.08,7.02-12.15,9.1s-10.9,3.12-17.48,3.12c-7.11,0-13.54-1.3-19.3-3.9-5.76-2.6-10.33-6.41-13.71-11.44-3.38-5.03-5.07-11.14-5.07-18.33s1.69-13.3,5.07-18.33c3.38-5.02,7.95-8.88,13.71-11.57,5.76-2.68,12.19-4.03,19.3-4.03,6.58,0,12.39,1.06,17.41,3.18,5.03,2.12,9.05,5.14,12.09,9.04,3.03,3.9,4.81,8.62,5.33,14.16h-13.25c-1.48-4.59-4.14-8.17-8-10.72-3.86-2.56-8.39-3.83-13.58-3.83-4.25,0-8.15.84-11.7,2.53-3.55,1.69-6.39,4.16-8.51,7.41-2.12,3.25-3.19,7.3-3.19,12.15s1.06,8.8,3.19,12.09c2.12,3.3,4.96,5.74,8.51,7.34,3.55,1.61,7.45,2.41,11.7,2.41,5.72,0,10.42-1.28,14.1-3.84,3.68-2.55,6.21-6.17,7.6-10.85h13.26Z"
              />
              <path class="cls-2" d="M275.84,74.64h14.43v90.71h-14.43v-90.71Z" />
              <path
                class="cls-2"
                d="M311.18,146.65v-37.04h-9.62v-10.38h9.62v-21.46h14.47v21.46h11v10.38h-11v37.43c0,7.02,1.95,8.58,7.41,8.58,2.21,0,3.25-.13,5.46-.52v10.26c-3.25.65-5.33.78-8.06.78-10.92,0-19.28-4.16-19.28-19.49Z"
              />
              <path
                class="cls-2"
                d="M382.66,166.79c-7.19,0-13.65-1.3-19.37-3.9-5.72-2.6-10.22-6.41-13.51-11.44-3.3-5.03-4.94-11.14-4.94-18.33s1.65-13.19,4.94-18.26c3.29-5.07,7.8-8.94,13.51-11.63,5.72-2.68,12.18-4.03,19.37-4.03s13.6,1.35,19.23,4.03c5.64,2.69,10.08,6.57,13.33,11.63,3.25,5.07,4.87,11.16,4.87,18.26s-1.62,13.3-4.87,18.33c-3.25,5.03-7.69,8.83-13.33,11.44-5.63,2.6-12.04,3.9-19.23,3.9ZM382.66,154.96c4.16,0,7.97-.82,11.44-2.47,3.46-1.65,6.21-4.12,8.25-7.41,2.03-3.29,3.05-7.28,3.05-11.96s-1.02-8.66-3.05-11.96c-2.04-3.29-4.76-5.83-8.19-7.61-3.42-1.77-7.26-2.66-11.5-2.66s-8.11.87-11.57,2.6c-3.47,1.73-6.26,4.25-8.39,7.54-2.12,3.3-3.18,7.32-3.18,12.09s1.04,8.66,3.12,11.96,4.87,5.76,8.38,7.41c3.51,1.65,7.39,2.47,11.63,2.47Z"
              />
              <path class="cls-2" d="M434.26,74.64h14.43v90.71h-14.43v-90.71Z" />
              <path
                class="cls-2"
                d="M500.67,166.79c-7.19,0-13.64-1.3-19.36-3.9-5.72-2.6-10.23-6.41-13.52-11.44-3.3-5.03-4.94-11.14-4.94-18.33s1.64-13.19,4.94-18.26c3.29-5.07,7.8-8.94,13.52-11.63,5.72-2.68,12.17-4.03,19.36-4.03s13.6,1.35,19.24,4.03c5.63,2.69,10.07,6.57,13.32,11.63,3.25,5.07,4.87,11.16,4.87,18.26s-1.62,13.3-4.87,18.33c-3.25,5.03-7.69,8.83-13.32,11.44-5.64,2.6-12.05,3.9-19.24,3.9ZM500.67,154.96c4.16,0,7.97-.82,11.44-2.47,3.46-1.65,6.22-4.12,8.25-7.41,2.03-3.29,3.05-7.28,3.05-11.96s-1.02-8.66-3.05-11.96c-2.03-3.29-4.77-5.83-8.19-7.61-3.43-1.77-7.26-2.66-11.5-2.66s-8.1.87-11.57,2.6c-3.46,1.73-6.26,4.25-8.38,7.54-2.12,3.3-3.19,7.32-3.19,12.09s1.04,8.66,3.12,11.96c2.08,3.29,4.87,5.76,8.39,7.41,3.51,1.65,7.39,2.47,11.63,2.47Z"
              />
              <polygon
                class="cls-2"
                points="688.14 100.64 667.41 149.32 646.94 100.64 631.47 100.64 660.24 164.59 646.81 191.35 662.02 191.35 703.61 100.64 688.14 100.64"
              />
              <path
                class="cls-2"
                d="M620.2,99.23s-36.83-.02-37.43-.02c-7.19,0-13.64,1.35-19.36,4.03-5.72,2.69-10.23,6.57-13.52,11.63-3.3,5.07-4.94,11.16-4.94,18.26s1.64,13.3,4.94,18.33c3.03,4.62,7.13,8.16,12.21,10.73-2.24.62-4.14,1.54-5.66,2.78-2.12,1.73-3.18,4.33-3.18,7.79,0,1.73.35,3.32,1.04,4.75.69,1.43,1.77,2.68,3.25,3.77,1.47,1.08,3.44,1.91,5.92,2.47,2.47.57,5.43.85,8.9.85h17.68c4.5,0,8.01.86,10.53,2.6,2.51,1.73,3.77,4.72,3.77,8.97v2.99h14.43v-5.85c0-5.2-1.11-9.29-3.32-12.28-2.21-2.99-5.31-5.11-9.29-6.37-3.99-1.26-8.62-1.89-13.91-1.89h-18.45c-1.91,0-3.38-.39-4.42-1.17-1.04-.78-1.56-1.82-1.56-3.12,0-1.47.66-2.59,1.89-3.4,4.06,1.1,8.39,1.71,13.08,1.71,7.19,0,13.6-1.3,19.24-3.9,5.63-2.6,10.07-6.41,13.32-11.44,3.25-5.03,4.87-11.14,4.87-18.33s-1.62-13.19-4.87-18.26c-1.14-1.78-2.49-3.36-3.93-4.85,3.61.81,7.06,1.44,8.8,1.41v-12.2ZM602.46,145.08c-2.04,3.29-4.79,5.76-8.25,7.41-3.47,1.65-7.28,2.47-11.44,2.47s-8.12-.83-11.63-2.47c-3.51-1.65-6.3-4.12-8.38-7.41-2.08-3.29-3.12-7.28-3.12-11.96s1.06-8.79,3.19-12.09c2.12-3.29,4.92-5.8,8.38-7.54,3.46-1.73,7.32-2.6,11.57-2.6s8.08.89,11.5,2.66c3.42,1.78,6.15,4.32,8.19,7.61,2.03,3.29,3.05,7.28,3.05,11.96s-1.02,8.66-3.05,11.96Z"
              />
              <path
                class="cls-1"
                d="M193.79,100.77c0,4.68-1.02,8.66-3.05,11.96-2.04,3.29-4.79,5.76-8.25,7.41-3.47,1.65-7.28,2.47-11.44,2.47s-8.12-.83-11.63-2.47c-3.51-1.65-6.3-4.12-8.38-7.41s-3.12-7.28-3.12-11.96c0-.05,0-.09,0-.13h-14.69s0,.09,0,.13c0,7.19,1.64,13.3,4.94,18.33,3.29,5.03,7.8,8.83,13.52,11.44,5.72,2.6,12.17,3.9,19.36,3.9s13.6-1.3,19.24-3.9c5.63-2.6,10.07-6.41,13.32-11.44,3.25-5.03,4.87-11.14,4.87-18.33,0-.05,0-.09,0-.13h-14.68s0,.09,0,.13Z"
              />
              <path
                class="cls-1"
                d="M204.3,153.4c2.12-3.29,4.92-5.8,8.38-7.54,3.47-1.73,7.32-2.6,11.57-2.6s8.08.89,11.5,2.66c3.42,1.78,6.15,4.32,8.19,7.61,2.01,3.26,3.03,7.2,3.05,11.82h14.68c-.02-7.04-1.64-13.09-4.87-18.13-3.25-5.07-7.69-8.94-13.32-11.63-5.63-2.68-12.05-4.03-19.24-4.03s-13.64,1.35-19.36,4.03c-5.72,2.69-10.22,6.57-13.52,11.63-3.27,5.04-4.91,11.08-4.93,18.13h14.68c.02-4.7,1.08-8.69,3.18-11.96Z"
              />
            </svg>
          </div>
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
