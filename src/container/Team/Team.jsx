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
            <h2 className="head-text">Hi, I’m Sandra!</h2>
            <br />
            <h2 className="bolt-text">Main Cooltogist & Founder </h2>
            <hr />
            <br />
            <p className="p-text team__description">
              Political Science breeding Experienced in the triad of agency, corporate and business worlds. Perfect
              blend of Creativity & Action Insatiable appetite for culture and its intricate dance with people and
              societies. Strong believer in a brand’s alignment with cultural context & market dynamics.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Team, 'We Are');
