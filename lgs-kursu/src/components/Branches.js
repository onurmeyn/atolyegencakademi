
import React from 'react';
import './Branches.css';

const Branches = () => {
  const branches = ['Çankaya', 'Batıkent', 'Eryaman'];

  return (
    <section className="branches">
      <h2>Şubelerimiz</h2>
      <ul>
        {branches.map(branch => (
          <li key={branch}>{branch}</li>
        ))}
      </ul>
    </section>
  );
};

export default Branches;
