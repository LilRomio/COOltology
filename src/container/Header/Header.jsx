import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './Header.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Header = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
    <div className="app__header app__flex">
      <motion.div className="header-text app__flex" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants} className="head-text">
          <span className="transparent-title">Brand Delivery /</span> Strategic Planning /
        </motion.h2>
        <motion.h2 variants={textVariants} className="head-text">
          Brand Review Workshops /<span className="transparent-title"> Culture Analysis /</span>
        </motion.h2>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="header-img app__flex">
            <img src={images.headerImg} alt="headerImg" />
          </div>
        </div>
      </motion.div>
      <br />
      {/* <div ref={slider} className="head-text slider">
        <p ref={firstText} className="slider__text" style={{ fontSize: '4rem' }}>
          A brand is <span style={{ fontSize: '4rem' }}>a brand is</span> {''}
          <span className="bold-text" style={{ fontSize: '4rem' }}>
            a brand is.
          </span>
        </p>
        <p ref={secondText} className="slider__text" style={{ fontSize: '4rem' }}>
          A brand is <span style={{ fontSize: '4rem' }}> a brand is</span> {''}
          <span className="bold-text" style={{ fontSize: '4rem' }}>
            a brand is.
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default Header;
