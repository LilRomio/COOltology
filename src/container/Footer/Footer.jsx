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
            <div className="head-text app__flex" style={{ justifyContent: 'space-between', gap: '20px' }}>
              Let’s talk!
              <div className="arrow" />
            </div>

            <p> sandra@cooltology.com</p>

            <p>+40720880348</p>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
