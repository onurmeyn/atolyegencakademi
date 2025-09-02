import React from 'react';
import './Footer.css';
import logo from '../assets/logo-white.svg';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src={logo} alt="atölyegenç AKADEMİ" className="logo" />
          <p>Başarı hikayeni yaz!</p>
        </div>
        <div className="footer-links">
          <h3>Hızlı Erişim</h3>
          <ul>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="#programlar">Programlar</a></li>
            <li><a href="#basarilarimiz">Başarılarımız</a></li>
            <li><a href="#basari-hikayeleri">Başarı Hikayeleri</a></li>
            <li><a href="#subeler">Şubeler</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>İletişim</h3>
          <p>Adres: Matbuat Sokak no 13 gazeteciler sitesi Esentepe Şişli İstanbul</p>
          <p>Telefon: (0212) 296 93 06</p>
          <p>E-posta: info@atolyeegitim.com</p>
        </div>
        <div className="footer-social">
          <h3>Sosyal Medya</h3>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/atolyegencakademi" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Atölye Genç Akademi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
