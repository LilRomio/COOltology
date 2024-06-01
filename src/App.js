import React from 'react';
import { About, Footer, Header, Skills, Team, Values, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Team />
      <Values />
      <Footer />
    </div>
  );
};

export default App;
