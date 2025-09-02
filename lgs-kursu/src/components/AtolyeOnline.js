import React from 'react';
import './AtolyeOnline.css';
import { FiBarChart2, FiCheckSquare, FiBookOpen, FiTarget, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import { FaLaptopCode } from 'react-icons/fa';

const AtolyeOnline = () => {
  return (
    <section className="atolye-online-dark" id="atolyemonline">
      <div className="atolye-online-container">
        <h2 className="atolye-online-title">
          <FaLaptopCode className="heading-icon"/> atölye<span>online</span>
        </h2>
        <p className="atolye-online-subtitle">Öğrenci gelişimini anlık takip eden, veli ve öğrenciye özel dijital asistanınız.</p>
        <div className="features-grid-dark">
          <div className="feature-card-dark">
            <FiBarChart2 className="icon" />
            <h3>Detaylı Öğrenci Raporları</h3>
            <p>Sınav sonuçları, branş bazlı performans analizleri ve psikolojik test raporları ile öğrencinin bütünsel gelişim takibi.</p>
          </div>
          <div className="feature-card-dark">
            <FiCheckSquare className="icon" />
            <h3>Anlık Sonuç ve Karne Takibi</h3>
            <p>Optik formların anında okunmasıyla sınav sonuçları, doğru/yanlış dağılımları ve konu başarı oranları anında sistemde.</p>
          </div>
          <div className="feature-card-dark">
            <FiBookOpen className="icon" />
            <h3>Ödev ve Etüt Takip Sistemi</h3>
            <p>Atanan ödevler, yapılan ve eksik bırakılan görevler anlık olarak takip edilir, veriler analiz edilerek gelişim raporlanır.</p>
          </div>
          <div className="feature-card-dark">
            <FiTarget className="icon" />
            <h3>Kişiselleştirilmiş Analiz</h3>
            <p>Öğrencinin güçlü ve zayıf yönleri belirlenir, hedeflenen sıralama için kişiye özel bir yol haritası oluşturulur.</p>
          </div>
          <div className="feature-card-dark">
            <FiMessageSquare className="icon" />
            <h3>Veli Bilgilendirme Sistemi</h3>
            <p>Haftalık gelişim süreci, ödev durumu ve genel ilerleme hakkında velilere WhatsApp benzeri bir sistem üzerinden düzenli bilgi akışı.</p>
          </div>
          <div className="feature-card-dark">
            <FiTrendingUp className="icon" />
            <h3>Rehberlik ve Koçluk Modülü</h3>
            <p>Profesyonel mentörler eşliğinde disiplin, motivasyon, kaygı yönetimi gibi konularda birebir destek ve takip.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtolyeOnline;
