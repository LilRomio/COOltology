import React, { useRef } from 'react';
import './WhyCooltology.scss';
import { useInView, motion } from 'framer-motion';

import { slideUp, opacity } from './animation';

const WhyCooltology = () => {
  const items = [
    {
      title: 'Brands are living entities shaped by perceptions and interactions.',
      subtitle: 'Brand delivery extravaganza achieved.  ',
      text1: 'We get to your brand’s vision and core truth. ',
      text2: 'We search for the aha moments. ',
      text3: 'We tell your brand’s story in a perfectly crafted plan.',
      text4: 'We blend it with powerful cultural insights in tune with your audience. ',
    },
  ];

  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <>
      <motion.h2 variants={opacity} className="p-text">
        Why Cooltology?
      </motion.h2>
      <div ref={description} className="why__container">
        <div className="body">
          <p className="bold-text" style={{ fontSize: '3rem' }}>
            {items.map((items, index) => {
              return (
                <div key={index} className="why__content">
                  <motion.div
                    className="why__text"
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? 'open' : 'closed'}
                    key={index}
                  >
                    <h1 className="head-text" style={{ fontSize: '3.5rem' }}>
                      {items.title}
                    </h1>

                    <p className="p-text" style={{ fontSize: '1.4rem' }}>
                      <span>&#x27A1;</span> {items.text1}
                    </p>
                    <p className="p-text" style={{ fontSize: '1.4rem' }}>
                      <span>&#x27A1;</span> {items.text2}
                    </p>
                    <p className="p-text" style={{ fontSize: '1.4rem' }}>
                      <span>&#x27A1;</span> {items.text3}
                    </p>
                    <p className="p-text" style={{ fontSize: '1.4rem' }}>
                      <span>&#x27A1;</span> {items.text4}
                    </p>
                    <h2 className="bold-text" style={{ fontSize: '3.5rem' }}>
                      {items.subtitle}
                    </h2>
                  </motion.div>
                </div>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyCooltology;
