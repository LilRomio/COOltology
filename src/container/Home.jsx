import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Cursor } from '../components';

import { Preloader, About, Footer, Header, WhatWeDo, WhyCooltology, Team, Values } from './index';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Cursor />
      <Navbar />

      <section id="Hello!" style={{ backgroundColor: 'var(--white-color)' }}>
        <Header />
      </section>
      <section>
        <About />
      </section>
      <section id="Cooltology is">
        <Values />
      </section>
      <section id="We Do" style={{ padding: '70px  0px', backgroundColor: 'var(--white-color)' }}>
        <WhatWeDo />
      </section>
      <section id="We Are" style={{ padding: '70px  0px', backgroundColor: 'var(--white-color)' }}>
        <Team />
      </section>
      <section>
        <WhyCooltology />
      </section>
      <section id="Let's talk">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
