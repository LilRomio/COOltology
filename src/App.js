import React from 'react';
import Home from './container/Home';
import { PrivatePolicy } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="politica-interna" element={<PrivatePolicy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
