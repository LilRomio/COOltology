import React, { useState } from 'react';
import { menuSlide } from './animation';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <motion.div
        intial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="app__navbar-logo"
      >
        <a href="/">
          <img src={images.logoWhite} alt="logo" />
        </a>
      </motion.div>
      {/* <ul className="app__navbar-links">
        {['home', 'COOltology is', 'what we do', 'our projects', 'our team', 'more on COOltology', "let's talk"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul> */}
      <motion.div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} variants={menuSlide}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Hello!', 'Cooltology is', 'We Do', 'We Are', "Let's talk"].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
