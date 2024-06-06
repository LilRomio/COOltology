import React from 'react';
import { About, Footer, Header, Skills, Team, Values } from './container';
import { Navbar, Cursor } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <section>
        <Navbar />
        <Header />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Team />
      </section>
      {/* <Work/> */}
      <section>
        <Values />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
