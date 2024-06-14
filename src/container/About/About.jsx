import React, { useState } from 'react';
import './About.scss';
import AboutCard from './AboutCard';
import { images } from '../../constants';

const abouts = [
  {
    id: 1,
    title: 'Momentum & Insights',
    description:
      'A brand is more than just a name or a logo—it’s a living entity shaped by perceptions, interactions, and cultural nuances. Understanding them and uncovering the core of your own truth, will give your brand leverage like no other.',
  },
  {
    id: 2,
    title: 'Strategy with Purpose',
    description:
      'The philosophy is simple: Where Truth Meets Love, Strategy Meets Purpose. Every brand has a unique essence that, when tapped into, can captivate audiences and drive meaningful connections.',
  },
  {
    id: 3,
    title: 'Action',
    description:
      'The love story between your brand and its perfectly matched audience involves stages and steps. All tangible, all measurable. A journey for which you need a cooltologist at work.',
  },
];

const About = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  return (
    <>
      <div className="about__title app__flex">
        <h1 className="b-head-text about-head" style={{ fontSize: '3rem' }}>
          Your Brand Needs:
        </h1>

        <br />
      </div>

      <div className="app__profiles">
        {abouts.map((about) => (
          <AboutCard
            key={about.id}
            about={about}
            isOpen={hoveredCardId === about.id}
            onHover={() => handleMouseEnter(about.id)}
            onLeave={handleMouseLeave}
          />
        ))}
      </div>
    </>
  );
};

export default About;
