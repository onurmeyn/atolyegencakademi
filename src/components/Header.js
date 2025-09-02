import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <a href="#hakkimizda">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hakkimizda">Ana Sayfa</a>
          <a href="#dersler">Dersler</a>
          <a href="#ogrencilerimiz">Öğrencilerimiz</a>
          <a href="#atolye-online">Atölye Online</a>
          <a href="#gurur-tablomuz">Gurur Tablomuz</a>
          <a href="#branches">Şubeler</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
