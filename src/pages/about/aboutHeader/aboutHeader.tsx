import React from 'react';

export const AboutHeader: React.FC = () => {
  return (
    <section className="about-section animate-section">
      <div className="section-content">
        <h1>ABOUT ISS</h1>
        <p className="subtitle">25 Years of International Cooperation in Space</p>
        <div className="stats-grid">
          <div className="stat">
            <h3>1998</h3>
            <p>First Module Launched</p>
          </div>
          <div className="stat">
            <h3>420+</h3>
            <p>Astronauts Visited</p>
          </div>
          <div className="stat">
            <h3>15</h3>
            <p>Partner Nations</p>
          </div>
          <div className="stat">
            <h3>3000+</h3>
            <p>Research Experiments</p>
          </div>
        </div>
      </div>
    </section>
  );
};