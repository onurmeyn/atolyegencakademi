import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'header sticky' : 'header'}>
      <div className="header-content">
        <img src={logo} alt="atölyegenç AKADEMİ" className="logo" />
        <nav>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#programlar">Programlar</a>
          <a href="#basarilarimiz">Başarılarımız</a>
          <a href="#basari-hikayeleri">Başarı Hikayeleri</a>
          <a href="#subeler">Şubeler</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
