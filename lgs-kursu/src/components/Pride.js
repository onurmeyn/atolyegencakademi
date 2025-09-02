import React, { useState, useEffect, useRef } from 'react';
import './Pride.css';

const Pride = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prideRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (prideRef.current) {
      observer.observe(prideRef.current);
    }

    return () => {
      if (prideRef.current) {
        observer.unobserve(prideRef.current);
      }
    };
  }, []);

  const stats = [
    { percentage: "%0,5'lik", label: 'dilimde', count: 25 },
    { percentage: "%1'lik", label: 'dilimde', count: 43 },
    { percentage: "%2'lik", label: 'dilimde', count: 58 },
  ];

  return (
    <section
      ref={prideRef}
      className={`pride-section ${isVisible ? 'is-visible' : ''}`}
      id="gurur-tablomuz"
    >
      <div className="pride-container">
        <h2 className="pride-title">Gurur Tablomuz</h2>
        <p className="pride-subtitle">Öğrencilerimizin başarıları, en büyük gurur kaynağımız.</p>
        <div className="pride-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="pride-stat-card">
              <div className="stat-header">
                <span className="stat-percentage">{stat.percentage}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-body">
                <span className="stat-count">{stat.count}</span>
                <span className="stat-student">öğrenci</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pride;
