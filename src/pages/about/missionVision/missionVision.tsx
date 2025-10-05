import React from 'react';

export const MissionVision: React.FC = () => {
  return (
    <section className="about-section animate-section">
      <h2>MISSION & VISION</h2>
      <div className="mission-content">
        <div className="mission-card">
          <h3>🚀 Our Mission</h3>
          <p>
            The International Space Station serves as an unprecedented laboratory 
            for scientific research and technological development in microgravity. 
            It enables long-term human presence in space and serves as a stepping 
            stone for future exploration missions to the Moon and Mars.
          </p>
        </div>
        <div className="mission-card">
          <h3>🌍 Our Vision</h3>
          <p>
            To maintain a continuous human presence in space for peaceful purposes, 
            foster international cooperation, advance scientific knowledge, and 
            inspire the next generation of explorers, scientists, and engineers 
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};