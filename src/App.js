import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader, About, Footer, Header, WhatWeDo, Skills, WhyCooltology, Team, Values } from './container';
import { Navbar, Cursor } from './components';
import './App.scss';

const App = () => {
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
    <div className="app">
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Cursor />
      <Navbar />

      <section id="Hello!">
        <Header />
      </section>
      <section id="Cooltology is" style={{ padding: '70px  30px', backgroundColor: 'var(--white-color)' }}>
        <About />
      </section>
      <section>
        <Values />
      </section>
      <section id="We Do" style={{ padding: '70px  0' }}>
        <WhatWeDo />
      </section>
      <section id="We Are">
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

export default App;
