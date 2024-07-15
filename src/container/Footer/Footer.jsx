import './Footer.scss';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div className="footer">
      <div className="body">
        <div className="title">
          <motion.div
            whileInView={{ opacity: 1, y: [300, 0] }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="symbol"
          >
            <img src={images.Symbol} alt="Symbol" />
          </motion.div>
          <div className="title__footer app__flex">
            Let’s talk
            <span className="arrow">
              <img src={images.Arrow} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="contact">
          <div>
            <a href="mailto:sandra@cooltology.com"> sandra@cooltology.com</a>
          </div>
          <div>
            <a href="tel:+40720880348" target="_blank" rel="noreferrer">
              +40720880348
            </a>
          </div>
        </div>
        <div className="policy">
          <div>
            <p> All Rights Reserved</p>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'var(--white-color)' }} to="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
