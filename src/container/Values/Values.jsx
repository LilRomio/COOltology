import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import { slideUp, opacity } from './animation';
import { AppWrap } from '../../wrapper';
import './Values.scss';

const Values = () => {
  const items = [
    {
      text1: 'The blend between culture, stories, tactics, and the coolness of them all.',
      text2: 'Their ever changing dynamics.',
      text3: 'Superfluous, apparently chaotic but with fascinating coherence.',
    },
  ];
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
            {items.map((items, index) => {
              return (
                <div key={index} className="mask">
                  <motion.div variants={slideUp} custom={index} animate={isInView ? 'open' : 'closed'} key={index}>
                    <p className="b-text" style={{ fontStyle: 'italic' }}>
                      {items.text1}
                    </p>
                    <br />
                    <p className="b-text">{items.text2}</p>
                    <br />
                    <p className="b-text">{items.text3}</p>
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

export default Values;
