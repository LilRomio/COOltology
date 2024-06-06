import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './About.scss';

const abouts = [
  {
    title: 'Momentum & Insights ',
    description:
      'A brand is more than just a name or a logo—it’s a living entity shaped by perceptions, interactions, and cultural nuances. Understanding them and uncovering the core of your own truth, will give your brand leverage like no other. ',
    imgUrl: images.profileImg1,
  },
  {
    title: 'Strategy with Purpose ',
    description:
      'The philosophy is simple: Where Truth Meets Love, Strategy Meets Purpose. Every brand has a unique essence that, when tapped into, can captivate audiences and drive meaningful connections. ',
    imgUrl: images.profileImg2,
  },
  {
    title: 'Action ',
    description:
      'The love story between your brand and its perfectly matched audience involves stages and steps. All tangible, all measurable. A journey for which you need a cooltologist at work.',
    imgUrl: images.profileImg3,
  },
];

const About = () => {
  return (
    <>
      <div className="about__title app__flex">
        <h1 className="head-text">Cooltology is.. </h1>
        <br />
        <p className="p-text">
          The blend between culture, stories, tactics, and the coolness of them all. Their ever changing dynamics.
          Superfluous, apparently chaotic but with fascinating coherence
        </p>
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

export default AppWrap(About, 'COOltology is');
