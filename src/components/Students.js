import React from 'react';
import './Students.css';

const Students = () => {
  const studentsData = [
    {
      name: 'Ece Güler',
      school: 'GALATASARAY LİSESİ',
      imageUrl: 'https://placehold.co/400x500?text=Ece+G%C3%BCler',
    },
    {
      name: 'Ece Güler',
      school: '2025 LGS BİRİNCİSİ',
      imageUrl: 'https://placehold.co/400x500?text=Ece+G%C3%BCler',
    },
    {
      name: 'Melis Erdoğan',
      school: 'İSTANBUL ERKEK LİSESİ',
      imageUrl: 'https://placehold.co/400x500?text=Melis+Erdo%C4%9Fan',
    },
    {
      name: 'Ali Veli',
      school: 'KABATAŞ ERKEK LİSESİ',
      imageUrl: 'https://placehold.co/400x500?text=Ali+Veli',
    },
    {
      name: 'Ayşe Fatma',
      school: 'CAĞALOĞLU ANADOLU LİSESİ',
      imageUrl: 'https://placehold.co/400x500?text=Ay%C5%9Fe+Fatma',
    },
  ];

  return (
    <section className="students" id="students">
      <h2 className="students-title">Başarılı Öğrencilerimiz</h2>
      <div className="students-grid">
        {studentsData.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.imageUrl} alt={student.name} />
            <h3>{student.name}</h3>
            <p>{student.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Students;
