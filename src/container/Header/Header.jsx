import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import TrackVisibility from 'react-on-screen';
import { AppWrap } from '../../wrapper';
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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 30,
    },
  },
};

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [' is a brand is a brand is', ' is a brand is a brand is', ' is a brand is a brand is'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="header-img app__flex">
            <img src={images.headerImg} alt="headerImg" />
          </div>

          <motion.div className="header-text app__flex" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants} className="head-text">
              Brand Delivery
            </motion.h2>
            <motion.h2 variants={textVariants} className="head-text">
              Strategic Planning
            </motion.h2>
            <motion.h2 variants={textVariants} className="head-text">
              Culture Analysis
            </motion.h2>
            <motion.h2 variants={textVariants} className="head-text">
              Brand Review Workshops
            </motion.h2>
          </motion.div>
          <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Brand Delivery Strategic Planning Culture Analysis Brand Review Workshops
          </motion.div>
        </div>
      </motion.div>

      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <div className=" tag-cmp app__flex">
              <h3 className="head-text">A brand {text}</h3>
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};

export default AppWrap(Header, 'home');
