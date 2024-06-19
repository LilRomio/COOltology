import React from 'react';
import Home from './container/Home';
import { PrivacyPolicy } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
