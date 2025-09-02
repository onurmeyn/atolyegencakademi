import React, { useState, useEffect, useRef } from 'react';
import './Bursluluk.css';
import { Link } from 'react-router-dom';

const Bursluluk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const burslulukRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (burslulukRef.current) {
      observer.observe(burslulukRef.current);
    }

    return () => {
      if (burslulukRef.current) {
        observer.unobserve(burslulukRef.current);
      }
    };
  }, []);

  return (
    <section ref={burslulukRef} className="cta-section" id="bursluluk">
      <div className="cta-background"></div>
      <div className="cta-overlay"></div>
      <div className={`cta-content ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="cta-title">LGS Bursluluk Sınavı</h2>
        <p className="cta-description">
          Atölye LGS’ye kabul ve bursluluk sınavı her yıl binlerce öğrencinin katılımıyla gerçekleşir. 
          Başarıya giden yolda ilk adımı at, sen de yerini al!
        </p>
        <Link to="/bursluluk-kayit" className="cta-button">
          Hemen Başvur
        </Link>
      </div>
    </section>
  );
};

export default Bursluluk;
