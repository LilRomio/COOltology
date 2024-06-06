import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';
import './Skills.scss';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

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
      <motion.div className="textContainer" variants={variants} initial="initial" whileInView="animate">
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="skills__title app__flex" variants={variants}>
        <div className="title">
          <img src={images.people} alt="peopleImg" />
          <h2 className="head-text">
            <b>Unique</b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2 className="head-text">
            <b>For Your</b> Business.
          </h2>
          <motion.div className="subtitle" variants={variants} initial="initial" whileInView="animate">
            <h3 className="head-text">What We Do?</h3>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="app__profiles" variants={variants}>
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
      </motion.div>
    </>
  );
};

export default AppWrap(Skills, 'what we do');
