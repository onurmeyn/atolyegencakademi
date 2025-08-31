
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">atölyegençAKADEMİ</div>
      <nav>
        <ul>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Programlar</a></li>
          <li><a href="#">Başarı Hikayeleri</a></li>
          <li><a href="#">Şubeler</a></li>
          <li><a href="#">Bursluluk Sınavı</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
