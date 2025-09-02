import React from 'react';
import './EgitimProgrami.css';

const EgitimProgrami = () => {
  const studentsData = [
    { name: 'Türkiye Birincisi', school: '500 Tam Puan', imageUrl: '/images/turkiye-birincisi.jpg.jpg' },
    { name: '', school: '', imageUrl: '/images/517296173_18053015450602211_594291588033798985_n.webp' },
    { name: '', school: '', imageUrl: '/images/518335798_18052918196602211_2020269905048487067_n.webp' },
    { name: '', school: '', imageUrl: '/images/518451917_18053228840602211_7750285146382696052_n.webp' },
    { name: '', school: '', imageUrl: '/images/518832156_18053013452602211_2704645657111600186_n.webp' },
    { name: '', school: '', imageUrl: '/images/527389183_18055732355602211_6762520399519508307_n.webp' },
  ];

  return (
    <section className="hall-of-fame-section" id="egitim-programi">
      <div className="hall-of-fame-container">
        <h2 className="hall-of-fame-title">Atölye Gençliler</h2>
        <p className="hall-of-fame-subtitle">Atölye Gençliler ile tanışın.</p>
        <div className="students-grid-dark">
          {studentsData.map((student, index) => (
            <div className="student-card-dark" key={index}>
              <div className="student-image-container-dark">
                <img src={student.imageUrl} alt={student.name} />
                <div className="student-card-overlay"></div>
              </div>
              <div className="student-info-dark">
                <h3 className="student-name-dark">{student.name}</h3>
                <p className="student-school-dark">{student.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EgitimProgrami;
