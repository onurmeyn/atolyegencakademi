import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="iletisim">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Bize Ulaşın</h2>
          <p className="contact-subtitle">Sorularınız, önerileriniz veya kayıt işlemleri için bizimle iletişime geçin.</p>
        </div>
        <div className="contact-content-wrapper">
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Adınız Soyadınız" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="E-posta Adresiniz" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Telefon Numaranız" />
              </div>
              <div className="form-group">
                <textarea placeholder="Mesajınız" rows="6" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Mesajı Gönder</button>
            </form>
          </div>
          <div className="contact-info-container">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.833826514213!2d28.99924531542031!3d41.0500199792964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac0c6d9a11a2d%3A0x6b5c3b3b3b3b3b3b!2sMatbuat%20Sk.%20No%3A13%2C%20Esentepe%2C%2034394%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1638366582354!5m2!1str!2str" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps">
              </iframe>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Adres:</strong> Matbuat Sokak no 13 gazeteciler sitesi Esentepe Şişli İstanbul
              </div>
              <div className="contact-item">
                <strong>Telefon:</strong> (0212) 296 93 06
              </div>
              <div className="contact-item">
                <strong>E-posta:</strong> info@atolyeegitim.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
