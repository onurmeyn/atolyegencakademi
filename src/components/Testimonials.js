import React, { useState } from 'react';
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
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 2 ? 0 : prevIndex + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 2 : prevIndex - 1));
    };


  return (
    <section className="testimonials" id="basari-hikayeleri">
      <h2>Mezunlarımızdan Dinleyin</h2>
      <p>Öğrencilerimizin başarı hikayeleri, en büyük gurur kaynağımız.</p>
      <div className="testimonials-wrapper">
        <div className="testimonials-container" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
            {testimonialsData.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
                <div className="stars">{'★'.repeat(testimonial.stars)}</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="student-info">
                  <div className="student-details">
                      <span className="student-name">{testimonial.name}</span>
                      <span className="student-school">{testimonial.school}</span>
                  </div>
                </div>
            </div>
            ))}
        </div>
      </div>
      <div className="slider-arrows">
        <button className="arrow left" onClick={prevTestimonial}>‹</button>
        <button className="arrow right" onClick={nextTestimonial}>›</button>
      </div>
    </section>
  );
};

export default Testimonials;
