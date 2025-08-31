
import React from 'react';
import './Branches.css';

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
    <section className="branches">
      <h2>Şubelerimiz</h2>
      <p>Size en yakın şubemizi ziyaret edin veya bizimle iletişime geçin.</p>
      <ul>
        {branches.map(branch => (
          <li key={branch.name}>
            <h3>{branch.name}</h3>
            <p>{branch.address}</p>
            <p>{branch.phone}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Branches;
