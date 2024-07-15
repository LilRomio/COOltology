import React, { useState, useEffect } from 'react';
import './WhatWeDo.scss';
import { CgMoreO } from 'react-icons/cg';
import { FaGenderless } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Brand Strategic Planning',
    subtitle: 'Vision-driven Roadmap ',
    description1: 'Brand Audit',
    description2: 'Brand Insights',
    description3: 'Actionable Roadmap to prioritize initiatives and optimize return',
  },
  {
    id: 2,
    title: 'Brand Delivery ',
    subtitle: 'Tactics. Supervision. Guidance. ',
    description1: 'Maintenance & Supervision of Brand Strategy ',
    description2: 'Creation of processes for brand implementation, both internally and externally',
    description3:
      'Optimize every touchpoint where your brand will be seen and experienced, both internally and externally.',
  },
  {
    id: 3,
    title: 'Culture & Momentum Analysis',
    subtitle: 'The heartbeat of brand behavior ',
    description1: "Understanding your brand's unique identity and amplifying its impact.",
    description2:
      'Analysis of the brand’s pulse when it comes to the sociological and emotional status your target audience finds themselves in. ',
    description3: 'Actionable guidance for a better brand journey. ',
  },
  {
    id: 4,
    title: 'Brand Review Workshop ',
    subtitle: 'Comprehensive overview of brand essence. ',
    description1:
      'Extended one day workshops offering a 360 Brand Pillars Analysis in order to unfold the brand’s strategy for scaling or launch. ',
    description2:
      'An in-depth session designed to uncover the strengths and opportunities within your brand and its current resonance with the world.',
  },
];

const WhatWeDo = () => {
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDescription = (index) => {
    setVisibleDescription(visibleDescription === index ? null : index);
  };

  return (
    <div className="container">
      <div className="weDo-info">
        <h1 className="b-p-text weDo-title">We Do</h1>
      </div>

      <div className="weDo-grid">
        {items.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="weDo-card"
            key={about.title + index}
          >
            <span className="decoration__weDo"> // </span>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <motion.div className="b-bold-text " style={{ textAlign: 'left' }}>
                {about.title}
              </motion.div>

              <div className="card__subtitle">
                <p className="b-p-text " style={{ textTransform: 'uppercase', textAlign: 'left' }}>
                  {about.subtitle}
                </p>
              </div>

              {!isMobile && (
                <div className="card__description-weDo">
                  <p className="b-p-text " style={{ textAlign: 'left' }}>
                    {about.description1}
                  </p>
                  <p className="b-p-text " style={{ textAlign: 'left' }}>
                    {about.description2}
                  </p>
                  <p className="b-p-text " style={{ textAlign: 'left' }}>
                    {about.description3}
                  </p>
                </div>
              )}

              {isMobile && visibleDescription === index && (
                <div className="card__description-weDo">
                  <p className="b-p-text " style={{ textAlign: 'left' }}>
                    {about.description1}
                  </p>
                  <p className="b-p-text " style={{ textAlign: 'left' }}>
                    {about.description2}
                  </p>
                  <p className="b-p-text " style={{ textAlign: 'left' }}>
                    {about.description3}
                  </p>
                </div>
              )}

              {isMobile && (
                <button className="toggle-button" onClick={() => toggleDescription(index)}>
                  {visibleDescription === index ? <FaGenderless /> : <CgMoreO />}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
