import './Footer.scss';
import { images } from '../../constants';

import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className="contact">
      <div className="body">
        <div className="title">
          <span>
            <div className="imageContainer">
              <img alt="Sandra" src={images.profileImg2} />
            </div>
            <h2>Let’s talk!</h2>
          </span>
        </div>

        <div className="nav">
          <div>
            <p> sandra@cooltology.com</p>
          </div>
          <div>
            <p>+40720880348</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
