import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Team.scss';

const Team = () => {
  return (
    <div className="app__team app__flex">
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__header-info">
        <div className="app__team-badge">
          <div className="team-img app__flex">
            <img src={images.founder} alt="founderImg" />
          </div>

          <div className="team-text app__flex">
            <h2 className="head-text">Founder</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Team, 'our team');
