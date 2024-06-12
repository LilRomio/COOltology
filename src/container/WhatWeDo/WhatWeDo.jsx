import React from 'react';
import { AppWrap } from '../../wrapper';
import './WhatWeDo.scss';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Brand Strategic Planning',
    description: 'Vision-driven Roadmap ',
  },
  {
    id: 2,
    title: 'Brand Delivery ',
    description: 'Tactics. Supervision. Guidance. ',
  },
  {
    id: 3,
    title: 'Culture & Momentum Analysis',
    description: 'The heartbeat of brand behavior. ',
  },
  {
    id: 4,
    title: 'Brand Review Workshop ',
    description: 'Comprehensive overview of brand essence. ',
  },
];

const WhatWeDo = () => {
  return (
    <>
      <div className="weDo__wrapper">
        <div className="weDo__title ">
          <h1 className="head-text weDo-title">We Do</h1>
        </div>

        <div className="app__cards">
          {items.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__cards-item"
              key={about.title + index}
            >
              <h2 className="bold-text " style={{ fontWeight: 400, fontSize: '1.2rem' }}>
                <span className="decoration__about"> // </span> {about.title}
              </h2>
              <hr />
              <motion.div
                className="card__description"
                whileInView={{ y: [300, 0] }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <p className="p-text " style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
