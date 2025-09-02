import React from 'react';
import './Pride.css';

const Pride = () => {
  const stats = [
    {
      percentage: "%0,5'lik",
      label: 'dilimde',
      count: 25,
    },
    {
      percentage: "%1'lik",
      label: 'dilimde',
      count: 43,
    },
    {
      percentage: "%2'lik",
      label: 'dilimde',
      count: 58,
    },
  ];

  return (
    <div className="pride-container" id="gurur-tablomuz">
      <div className="pride-content">
        <h2 className="pride-title">Gurur Tablomuz</h2>
        <p className="pride-subtitle">Öğrencilerimizin başarıları, en büyük gurur kaynağımız.</p>
        <div className="pride-stats">
          {stats.map((stat, index) => (
            <div key={index} className="pride-stat-item">
              <div className="stat-percentage-box">
                <span className="stat-percentage">{stat.percentage}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-count">{stat.count}</span>
              <span className="stat-student">öğrenci</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pride;
