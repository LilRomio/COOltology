import React from 'react';
import { motion } from 'framer-motion';
import { CgMoreO } from 'react-icons/cg';
import { FaGenderless } from 'react-icons/fa6';

const AboutCard = ({ about, isOpen, onHover, onLeave }) => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <h2 className="b-bold-text about-head" style={{ marginTop: 20, fontWeight: 600, fontSize: '2.1rem' }}>
          <span className="decoration__about"> // </span> {about.title}
        </h2>

        <hr />

        {isOpen ? <FaGenderless /> : <CgMoreO />}
        {isOpen && (
          <motion.div
            className="card__description"
            whileInView={{ y: [300, 0] }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className="b-p-text about-p" style={{ marginTop: 10, fontSize: '1.8rem' }}>
              {about.description}
            </p>
          </motion.div>
        )}
        <p className="number">{about.id}</p>
      </motion.div>
    </>
  );
};

export default AboutCard;
