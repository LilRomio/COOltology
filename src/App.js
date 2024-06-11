import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader, About, Footer, Header, WhatWeDo, Skills, Team, Values } from './container';
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
      }, 2000);
    })();
  }, []);
  return (
    <div className="app">
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Cursor />
      <Navbar />

      <section>
        <Header />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section>
        <Values />
      </section>
      <section id="weDo-section">
        <WhatWeDo />
      </section>
      <section>
        <Team />
      </section>
      {/* <Work/> */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
