import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import { slideUp, opacity } from './animation';

import './Values.scss';

const Values = () => {
  const phrase =
    ' The blend between culture, stories, tactics, and the coolness of them all. Their ever changing dynamics. Superfluous, apparently chaotic but with fascinating coherence.';
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <>
      <div ref={description} className="description">
        <div className="values__title">
          <h2 className="p-text">Cooltology is</h2>
        </div>

        <div className="body">
          <p className="bold-text">
            {phrase.split(' ').map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? 'open' : 'closed'} key={index}>
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Values;
