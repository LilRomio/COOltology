import React from 'react';
import './Parallax.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { motion, useScroll } from 'framer-motion';

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1>{type === 'services' ? 'What we do?' : 'What we did?'}</motion.h1>
      <motion.div className="mountains">
        <motion.img src={images.mountains} alt="mountainsImg" />
      </motion.div>
      <motion.div className="planets">
        <motion.img src={images.planets} alt="planetsImg" />
      </motion.div>
      <motion.div className="stars">
        <motion.img src={images.stars} alt="starsImg" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Parallax, 'parallax');
