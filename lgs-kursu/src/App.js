import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Branches from './components/Branches';
import AtolyeOnline from './components/AtolyeOnline';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AtolyeOnline />
      <Branches />
    </div>
  );
}

export default App;
