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
          <div className="team-text app__flex">
            <div className="team__description ">
              <h2 className="b-head-text team-title">
                <span>Hi</span>, I’m Sandra!
              </h2>

              <h2 className="b-head-text " style={{ fontSize: '1.6rem' }}>
                Main Cooltogist & Founder
              </h2>
              <br />
              <br />
              <p className="b-p-text">Political Science breeding.</p>
              <br />
              <p className="b-p-text">Experienced in the triad of agency, corporate and business worlds.</p>
              <br />
              <p className="b-p-text">Perfect blend of creativity & action.</p>
              <br />
              <p className="b-p-text">
                Insatiable appetite for culture and its intricate dance with people and societies.
              </p>
              <br />
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
