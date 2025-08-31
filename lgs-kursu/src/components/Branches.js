import React from 'react';
import './Branches.css';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Branches = () => {
  const branches = [
    {
      name: 'Bakırköy Genç Akademi',
      address: 'Zuhuratbaba Mahallesi Yücetarla Caddesi No: 24, Bakırköy / İSTANBUL',
      phone: '+90 545 196 93 06',
    },
    {
      name: 'Bahçeşehir Genç Akademi',
      address: 'Bahçeşehir 2. Kısım Mahallesi Ahmet Taner Kışlalı Bulvarı 3. Cadde A02 Villa, Bahçeşehir, Başakşehir / İSTANBUL',
      phone: '+90 546 559 61 96',
    },
    {
      name: 'Esentepe Genç Akademi',
      address: 'Esentepe Mahallesi Matbuat Sok. No: 13, Gayrettepe, Şişli / İSTANBUL',
      phone: '+90 212 296 93 06',
    },
    {
      name: 'Ataşehir Genç Akademi',
      address: 'Barbaros Mahallesi Mimar Sinan Caddesi No: 160/A, Ataşehir / İSTANBUL',
      phone: '+90 546 903 39 09',
    },
    {
      name: 'Çekmeköy Genç Akademi',
      address: 'Mimar Sinan Mahallesi Şenay Sok. No: 3, Çekmeköy / İSTANBUL',
      phone: '+90 216 642 60 00',
    },
    {
      name: 'Atakent Genç Akademi',
      address: 'Atakent Mahallesi 221. Cadde Rota Office B Blok No: 11, Küçükçekmece / İSTANBUL',
      phone: '+90 540 174 75 75',
    },
  ];

  return (
    <section className="branches" id="subeler">
      <h2>Şubelerimiz</h2>
      <p>Size en yakın şubemizi ziyaret edin veya bizimle iletişime geçin.</p>
      <div className="branches-grid">
        {branches.map(branch => (
          <div className="branch-card" key={branch.name}>
            <h3>{branch.name}</h3>
            <div className="branch-info">
              <FiMapPin className="icon" />
              <p>{branch.address}</p>
            </div>
            <div className="branch-info">
              <FiPhone className="icon" />
              <p>{branch.phone}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="general-contact">
        <h3>Genel İletişim</h3>
        <div className="general-contact-info">
          <div className="contact-item">
            <FiMail className="icon" />
            <p>atolyeelegitim@gmail.com</p>
          </div>
          <div className="contact-item">
            <FiPhone className="icon" />
            <p>+90 212 296 93 06</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
