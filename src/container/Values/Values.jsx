import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import { slideUp, opacity } from './animation';
import { AppWrap } from '../../wrapper';
import './Values.scss';

const Values = () => {
  const phrase =
    ' The blend between culture, stories, tactics, and the coolness of them all. Their ever changing dynamics. Superfluous, apparently chaotic but with fascinating coherence.';
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <>
      <motion.h2 variants={opacity} className="p-text">
        Cooltology is
      </motion.h2>
      <div ref={description} className="description">
        <div className="body">
          <p className="bold-text" style={{ fontSize: '3rem' }}>
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
