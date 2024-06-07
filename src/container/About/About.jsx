import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CgMoreO } from 'react-icons/cg';
import { FaGenderless } from 'react-icons/fa6';
import './About.scss';

const abouts = [
  {
    id: 1,
    title: 'Momentum & Insights ',
    description:
      'A brand is more than just a name or a logo—it’s a living entity shaped by perceptions, interactions, and cultural nuances. Understanding them and uncovering the core of your own truth, will give your brand leverage like no other. ',
  },
  {
    id: 2,
    title: 'Strategy with Purpose ',
    description:
      'The philosophy is simple: Where Truth Meets Love, Strategy Meets Purpose. Every brand has a unique essence that, when tapped into, can captivate audiences and drive meaningful connections. ',
  },
  {
    id: 3,
    title: 'Action ',
    description:
      'The love story between your brand and its perfectly matched audience involves stages and steps. All tangible, all measurable. A journey for which you need a cooltologist at work.',
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(0);
  const handelShow = (id) => {
    setShowMore(id);
  };
  return (
    <>
      <div className="about__title app__flex">
        <h1 className="b-head-text about-head">Your Brand Needs:</h1>
        <hr />
        <br />
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
            <h2 className="b-bold-text about-head" style={{ marginTop: 20, fontWeight: 600, fontSize: '1.5rem' }}>
              <span className="decoration__about"> // </span> {about.title}
            </h2>
            <hr />
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaGenderless /> : <CgMoreO />}</button>
            {isOpen && (
              <motion.div
                className="card__description"
                whileInView={{ y: [300, 0] }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <p className="b-p-text about-p" style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
