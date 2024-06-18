import React, { useState, useEffect } from 'react';
import Button from '../Button';

import { AnimatePresence, motion } from 'framer-motion';
import { images } from '../../constants';
import Nav from '../Nav';
import './Navbar.scss';
import index from '../Nav';

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

  const handleScroll = () => {
    // Example threshold; adjust as needed
    const scrollThreshold = 100;
    if (window.scrollY > scrollThreshold) {
      setIsLightBackground(true);
    } else {
      setIsLightBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`app__navbar ${isLightBackground ? 'light' : ''}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="app__navbar-logo"
      >
        <img src={isLightBackground ? images.logoWhite : images.logoBlack} alt="logo" />
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
  );
};

export default Navbar;
