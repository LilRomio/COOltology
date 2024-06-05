import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import TrackVisibility from 'react-on-screen';
import { AppWrap } from '../../wrapper';
import './Skills.scss';

const abouts = [
  {
    title: 'Brand Strategic Planning ',
    description: 'Vision-driven Roadmap',
    imgUrl: images.profileImg1,
  },
  {
    title: 'Brand Delivery',
    description: 'Tactics. Supervision. Guidance. ',
    imgUrl: images.profileImg2,
  },
  {
    title: 'Culture & Momentum Analysis  ',
    description: 'The heartbeat of brand behavior.',
    imgUrl: images.profileImg3,
  },
  {
    title: 'Brand Review Workshop ',
    description: 'Comprehensive overview of brand essence. ',
    imgUrl: images.profileImg3,
  },
];

const Skills = () => {
  return (
    <>
      <div className="skills__title app__flex">
        <h2 className="head-text">What we do </h2>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(Skills, 'what we do');
