import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Team.scss';

const Team = () => {
  return (
    <div className="app__team app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__team-badge">
          <div className="team-img app__flex">
            <img src={images.founder} alt="founderImg" />
          </div>

          <div className="team-text app__flex">
            <h2 className="head-text">Founder</h2>
            <br />
            <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, feugiat id tempor ac, tristique
              et nisi. Donec nec laoreet odio. Aliquam bibendum erat et nisi congue, a malesuada nunc tristique.
              Vestibulum ut nunc eu tortor convallis dictum quis malesuada lectus. Donec pulvinar ante a justo laoreet,
              a faucibus leo ullamcorper. Sed sagittis commodo euismod.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Team, 'our team');
