import React from 'react';
import './Branches.css';
import { FiMapPin, FiPhone } from 'react-icons/fi';

const Branches = () => {
  const branches = [
    {
      name: 'Bakırköy Genç Akademi',
      address: 'Zuhuratbaba Mah. Yücetarla Cad. No: 24, Bakırköy',
      phone: '+90 545 196 93 06',
    },
    {
      name: 'Bahçeşehir Genç Akademi',
      address: 'Bahçeşehir 2. Kısım Mah. A. Taner Kışlalı Blv. 3. Cad. A02 Villa, Bahçeşehir',
      phone: '+90 546 559 61 96',
    },
    {
      name: 'Esentepe Genç Akademi',
      address: 'Esentepe Mah. Matbuat Sok. No: 13, Gayrettepe, Şişli',
      phone: '+90 212 296 93 06',
    },
    {
      name: 'Ataşehir Genç Akademi',
      address: 'Barbaros Mah. Mimar Sinan Cad. No: 160/A, Ataşehir',
      phone: '+90 546 903 39 09',
    },
    {
      name: 'Çekmeköy Genç Akademi',
      address: 'Mimar Sinan Mah. Şenay Sok. No: 3, Çekmeköy',
      phone: '+90 216 642 60 00',
    },
    {
      name: 'Atakent Genç Akademi',
      address: 'Atakent Mah. 221. Cad. Rota Office B Blok No: 11, Küçükçekmece',
      phone: '+90 540 174 75 75',
    },
  ];

  return (
    <section className="branches-section" id="branches">
      <div className="branches-container">
        <h2 className="branches-title">Her Zaman Yanınızdayız</h2>
        <p className="branches-subtitle">Size en yakın şubemizi ziyaret ederek eğitimlerimiz hakkında detaylı bilgi alabilirsiniz.</p>
        <div className="branches-grid">
          {branches.map(branch => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;
            const phoneUrl = `tel:${branch.phone.replace(/\s+/g, '')}`;
            return (
              <div className="branch-card" key={branch.name}>
                <h3 className="branch-name">{branch.name}</h3>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="branch-info">
                  <FiMapPin className="icon" />
                  <span>{branch.address}</span>
                </a>
                <a href={phoneUrl} className="branch-info">
                  <FiPhone className="icon" />
                  <span>{branch.phone}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Branches;
