import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Branches from './components/Branches';
import AtolyeOnline from './components/AtolyeOnline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Pride from './components/Pride';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="hakkimizda">
        <Hero />
      </section>
      <section id="programlar">
        <AtolyeOnline />
      </section>
      <section id="basari-hikayeleri">
        <Testimonials />
      </section>
      <section id="basarilarimiz">
        <Pride />
      </section>
      <section id="subeler">
        <Branches />
      </section>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
