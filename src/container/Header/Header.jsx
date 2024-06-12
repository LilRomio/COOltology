import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';
import './Header.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: '-220%',
//     transition: {
//       repeat: Infinity,
//       repeatType: 'mirror',
//       duration: 30,
//     },
//   },
// };

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div className="header-text app__flex" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants} className="head-text">
          <span className="transparent-title">Brand Delivery /</span> Strategic Planning /
        </motion.h2>
        <motion.h2 variants={textVariants} className="head-text">
          Brand Review Workshops /<span className="transparent-title"> Culture Analysis /</span>
        </motion.h2>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="header-img app__flex">
            <img src={images.headerImg} alt="headerImg" />
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <motion.h2 className="head-text">
        A brand is <span>a brand is</span> <span className="bold-text">a brand is.</span>
      </motion.h2>
    </div>
  );
};

export default Header;
