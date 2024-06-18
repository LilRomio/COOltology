import React from 'react';
import { AppWrap } from '../../wrapper';
import './WhatWeDo.scss';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Brand Strategic Planning',
    subtitle: 'Vision-driven Roadmap ',
    description1: 'Brand Audit',
    description2: 'Brand Insights',
    description3: ' Actionable Roadmap to prioritize initiatives and optimize return',
  },
  {
    id: 2,
    title: 'Brand Delivery ',
    subtitle: 'Tactics. Supervision. Guidance. ',
    description1: 'Maintenance & Supervision of Brand Strategy ',
    description2: 'Creation of processes for brand implementation, both internally and externally',
    description3:
      ' Optimize every touchpoint where your brand will be seen and experienced, both internally and externally.',
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
  return (
    <>
      <div className="container">
        <div className="weDo-info">
          <h1 className="p-text weDo-title">We Do</h1>
        </div>

        <div className="weDo-grid">
          {items.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1, y: [300, 0] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="weDo-card"
              key={about.title + index}
            >
              <span className="decoration__about"> // </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <motion.div className="bold-text " style={{ fontWeight: 400, fontSize: '1.8rem' }}>
                  {about.title}
                </motion.div>

                <div className="card__subtitle">
                  <p className="p-text " style={{ textTransform: 'uppercase', fontSize: '1.2rem' }}>
                    {about.subtitle}
                  </p>
                  <br />
                </div>
                <div className="card__description">
                  <p className="p-text " style={{ fontSize: '0.8rem' }}>
                    {about.description1}
                  </p>
                  <p className="p-text " style={{ fontSize: '0.8rem' }}>
                    {about.description2}
                  </p>
                  <p className="p-text " style={{ fontSize: '0.8rem' }}>
                    {about.description3}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
