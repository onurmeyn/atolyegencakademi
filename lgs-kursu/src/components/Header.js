
import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="atölyegenç AKADEMİ" className="logo" />
      <nav>
        <ul>
          <li><a href="#hakkimizda">Hakkımızda</a></li>
          <li><a href="#programlar">Programlar</a></li>
          <li><a href="#basarilarimiz">Başarılarımız</a></li>
          <li><a href="#basari-hikayeleri">Başarı Hikayeleri</a></li>
          <li><a href="#subeler">Şubeler</a></li>
          <li><a href="#bursluluk-sinavi">Bursluluk Sınavı</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
