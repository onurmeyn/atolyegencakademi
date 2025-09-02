import React from 'react';
import Admin from './components/Admin';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Branches from './components/Branches';
import AtolyeOnline from './components/AtolyeOnline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Bursluluk from './components/Bursluluk';
import BurslulukKayit from './components/BurslulukKayit';
import About from './components/About';
import Contact from './components/Contact';
import EgitimProgrami from './components/EgitimProgrami';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <section id="hakkimizda">
            <Hero />
          </section>
          <section id="egitim-programi">
            <EgitimProgrami />
          </section>
          <section id="bursluluk">
            <Bursluluk />
          </section>
          <section id="programlar">
            <AtolyeOnline />
          </section>
          <section id="basari-hikayeleri">
            <Testimonials />
          </section>
          <section id="subeler">
            <Branches />
          </section>
          <section id="iletisim">
            <Contact />
          </section>
        </>} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/bursluluk-kayit" element={<BurslulukKayit />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
