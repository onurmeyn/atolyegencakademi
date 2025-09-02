import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo-white.svg';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <a href="/"><img src={logo} alt="atölyegençAKADEMİ" /></a>
        </div>
        
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="/hakkimizda" onClick={closeMenu}>Hakkımızda</a>
          <a href="/#basarilarimiz" onClick={closeMenu}>Başarılarımız</a>
          <a href="/#programlar" onClick={closeMenu}>atölyemonline</a>
          <a href="/#basari-hikayeleri" onClick={closeMenu}>Başarı Hikayeleri</a>
          <a href="/#bursluluk" onClick={closeMenu}>Bursluluk Sınavı</a>
          <a href="/#subeler" onClick={closeMenu}>Şubeler</a>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;