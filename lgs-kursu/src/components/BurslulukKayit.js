import React, { useState } from 'react';
import './BurslulukKayit.css';

const BurslulukKayit = () => {
  const [formData, setFormData] = useState({
    veliAdi: '',
    veliTelefon: '',
    ogrenciAdi: '',
    ogrenciOkulu: '',
    ogrenciSinifi: '6. Sınıf',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to local storage to be later downloaded as an excel file by an admin
    const existingData = JSON.parse(localStorage.getItem('burslulukKayitlari')) || [];
    const newData = [...existingData, formData];
    localStorage.setItem('burslulukKayitlari', JSON.stringify(newData));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bursluluk-kayit-container thank-you-message">
        <h2>Teşekkürler, bilgileriniz alınmıştır.</h2>
        <p>Sınav kayıtları açıldığında size bilgi verilecektir.</p>
      </div>
    );
  }

  return (
    <div className="bursluluk-kayit-container">
      <h2>Bursluluk Sınavı Kayıt Formu</h2>
      <form onSubmit={handleSubmit} className="bursluluk-kayit-form">
        <div className="form-group">
          <label htmlFor="veliAdi">Veli Adı Soyadı</label>
          <input
            type="text"
            id="veliAdi"
            name="veliAdi"
            value={formData.veliAdi}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="veliTelefon">Veli Telefonu</label>
          <input
            type="tel"
            id="veliTelefon"
            name="veliTelefon"
            value={formData.veliTelefon}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ogrenciAdi">Öğrenci Adı Soyadı</label>
          <input
            type="text"
            id="ogrenciAdi"
            name="ogrenciAdi"
            value={formData.ogrenciAdi}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ogrenciOkulu">Öğrencinin Okulu</label>
          <input
            type="text"
            id="ogrenciOkulu"
            name="ogrenciOkulu"
            value={formData.ogrenciOkulu}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ogrenciSinifi">Öğrencinin Okuduğu Sınıf</label>
          <select
            id="ogrenciSinifi"
            name="ogrenciSinifi"
            value={formData.ogrenciSinifi}
            onChange={handleChange}
          >
            <option value="6. Sınıf">6. Sınıf</option>
            <option value="7. Sınıf">7. Sınıf</option>
            <option value="8. Sınıf">8. Sınıf</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Gönder</button>
      </form>
    </div>
  );
};

export default BurslulukKayit;
