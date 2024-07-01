import { motion } from 'framer-motion';
import { images } from '../../constants';

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
          <div className="team-text app__flex">
            <div className="team__description ">
              <h2 className="b-head-text team-title">
                <motion.div
                  whileInView={{ opacity: 1, x: [100, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="hi"
                >
                  Hi
                </motion.div>
                <div>, I’m Sandra!</div>
              </h2>

              <h2 className="b-head-text team-subtitle ">Main Cooltogist & Founder</h2>

              <p className="b-p-text">Political Science breeding.</p>

              <p className="b-p-text">Experienced in the triad of agency, corporate and business worlds.</p>

              <p className="b-p-text">Perfect blend of creativity & action.</p>

              <p className="b-p-text">
                Insatiable appetite for culture and its intricate dance with people and societies.
              </p>

              <p className="b-p-text">
                Strong believer in a brand’s alignment with cultural context & market dynamics.
              </p>
            </div>
          </div>
          <div className="team-img app__flex">
            <img src={images.founder} alt="founderImg" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
