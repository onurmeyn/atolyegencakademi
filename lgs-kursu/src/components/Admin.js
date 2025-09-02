import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './Admin.css';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (password === 'AtolyeGencAdmin2024!') {
      setIsLoggedIn(true);
    } else {
      alert('Yanlış şifre!');
    }
  };

  const downloadExcel = () => {
    const data = JSON.parse(localStorage.getItem('burslulukKayitlari')) || [];
    if (data.length === 0) {
      alert('Kaydedilmiş veri bulunmamaktadır.');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bursluluk Kayıtları');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'bursluluk_kayitlari.xlsx');
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <h2>Admin Girişi</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
        />
        <button onClick={handleLogin}>Giriş Yap</button>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Bursluluk Sınavı Kayıtları</h2>
      <button onClick={downloadExcel}>Kayıtları İndir</button>
    </div>
  );
};

export default Admin;
