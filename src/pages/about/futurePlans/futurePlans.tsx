import React from 'react';

export const FuturePlans: React.FC = () => {
  return (
    <section className="about-section animate-section">
      <h2>FUTURE OF ISS</h2>
      <div className="future-content">
        <div className="future-plan">
          <h3>🛰️ Extended Operations</h3>
          <p>ISS operations confirmed through 2030, with potential extension beyond</p>
        </div>
        <div className="future-plan">
          <h3>🌙 Lunar Gateway</h3>
          <p>ISS experience contributing to development of lunar orbit station</p>
        </div>
        <div className="future-plan">
          <h3>🔴 Mars Missions</h3>
          <p>Research on ISS directly supporting future human missions to Mars</p>
        </div>
        <div className="future-plan">
          <h3>🏢 Commercial Expansion</h3>
          <p>Growing role of commercial partners in space station operations</p>
        </div>
      </div>
    </section>
  );
};