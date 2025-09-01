import React from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src={logo} alt="atölyegenç AKADEMİ" className="logo" />
          <p>Geleceğin liderlerini bugünden yetiştiriyoruz.</p>
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
        <div className="footer-social">
          <h3>Sosyal Medya</h3>
          <div className="footer-social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
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
