import React from 'react';
import { About, Footer, Header, Skills, Team, Values, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Parallax from './container/Parallax/Parallax';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      {/* <Parallax id="Services" type="services" /> */}
      <Skills />
      {/* <Parallax id="Portfolio" type="portfolio" /> */}
      <Work></Work>
      <Team />
      <Values />
      <Footer />
    </div>
  );
};

export default App;
