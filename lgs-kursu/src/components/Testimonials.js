import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    stars: 5,
    text: '"Atölye Genç Akademi sayesinde eksiklerimi hızla kapattım ve deneme sınavlarındaki başarım inanılmaz arttı. Öğretmenlerimin desteğiyle hayalimdeki liseyi kazandım!"',
    name: 'Elif Korkmaz',
    school: "Galatasaray Lisesi - %0.12'lik Dilim",
  },
  {
    id: 2,
    stars: 5,
    text: '"Buradaki disiplinli çalışma ortamı ve kaliteli kaynaklar, LGS\'ye hazırlanırken en büyük yardımcımdı. Herkese tavsiye ederim."',
    name: 'Ahmet Çelik',
    school: "İstanbul Erkek Lisesi - %0.25'lik Dilim",
  },
  {
    id: 3,
    stars: 5,
    text: '"Kaliteli eğitim kadrosu ve birebir ilgi sayesinde LGS\'de hedeflediğim başarıya ulaştım. Teşekkürler Atölye Genç Akademi!"',
    name: 'Zeynep Yılmaz',
    school: "Cağaloğlu Anadolu Lisesi - %0.30'luk Dilim",
  },
    {
    id: 4,
    stars: 5,
    text: '"Deneme sınavlarının zorluk seviyesi ve analizleri, gerçek sınavda ne yapmam gerektiğini anlamamı sağladı. Atölye\'nin stratejileri paha biçilmez."',
    name: 'Ayşe Kaya',
    school: "Kabataş Erkek Lisesi - %0.40'lık Dilim",
  },
  {
    id: 5,
    stars: 5,
    text: '"Sadece akademik değil, motivasyon ve rehberlik anlamında da her zaman yanımdaydılar. Başarımda emeği geçen herkese minnettarım."',
    name: 'Mustafa Demir',
    school: "İzmir Fen Lisesi - %0.55'lik Dilim",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section-dark" id="basari-hikayeleri">
      <div className="testimonial-container-dark">
        <h2 className="testimonial-title-dark">Mezunlarımızdan Dinleyin</h2>
        <p className="testimonial-subtitle-dark">Öğrencilerimizin başarı hikayeleri, en büyük ilham kaynağımız.</p>
        <div className="testimonial-carousel">
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card-dark" key={testimonial.id}>
              <div className="testimonial-card-header">
                <div className="stars">{'★'.repeat(testimonial.stars)}</div>
              </div>
              <p className="testimonial-text-dark">{testimonial.text}</p>
              <div className="student-info-dark">
                <span className="student-name-dark">{testimonial.name}</span>
                <span className="student-school-dark">{testimonial.school}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
