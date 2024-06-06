import React from 'react';
import { About, Footer, Header, Skills, Team, Values, Work } from './container';
import { Navbar, Cursor } from './components';
import './App.scss';
import Parallax from './container/Parallax/Parallax';

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Header />
      <About />
      {/* <Parallax id="Services" type="services" /> */}
      <Skills />
      {/* <Parallax id="Portfolio" type="portfolio" /> */}
      {/* <Work/> */}
      <Team />
      <Values />
      <Footer />
    </div>
  );
};

export default App;
