import React from 'react';
import { About, Footer, Header, WhatWeDo, Skills, Team, Values } from './container';
import { Navbar, Cursor } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
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
