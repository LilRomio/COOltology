import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './Skills.scss';
const items = [
  {
    id: 1,
    title: 'Brand Strategic Planning',
    subtitle: 'Vision-driven Roadmap',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, feugiat id tempor ac, tristique et nisi. Donec nec laoreet odio. Aliquam bibendum erat et nisi congue, a malesuada nunc tristique. Vestibulum ut nunc eu tortor convallis dictum quis malesuada lectus. Donec pulvinar ante a justo laoreet, a faucibus leo ullamcorper. Sed sagittis commodo euismod.',
  },
  {
    id: 2,
    title: 'Brand Delivery',
    subtitle: 'Tactics. Supervision. Guidance. ',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, feugiat id tempor ac, tristique et nisi. Donec nec laoreet odio. Aliquam bibendum erat et nisi congue, a malesuada nunc tristique. Vestibulum ut nunc eu tortor convallis dictum quis malesuada lectus. Donec pulvinar ante a justo laoreet, a faucibus leo ullamcorper. Sed sagittis commodo euismod.',
  },
  {
    id: 3,
    title: 'Culture & Momentum Analysis',
    subtitle: 'The heartbeat of brand behavior.',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, feugiat id tempor ac, tristique et nisi. Donec nec laoreet odio. Aliquam bibendum erat et nisi congue, a malesuada nunc tristique. Vestibulum ut nunc eu tortor convallis dictum quis malesuada lectus. Donec pulvinar ante a justo laoreet, a faucibus leo ullamcorper. Sed sagittis commodo euismod. ',
  },
  {
    id: 4,
    title: 'Brand Review Workshop',
    subtitle: 'Comprehensive overview of brand essence.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, feugiat id tempor ac, tristique et nisi. Donec nec laoreet odio. Aliquam bibendum erat et nisi congue, a malesuada nunc tristique. Vestibulum ut nunc eu tortor convallis dictum quis malesuada lectus. Donec pulvinar ante a justo laoreet, a faucibus leo ullamcorper. Sed sagittis commodo euismod.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 className="head-text">{item.title}</h2>
            <p className="p-text">{item.subtitle}</p>
            <p className="p-text">{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Skills = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className="head-text">What we do</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AppWrap(Skills, 'We Do');
