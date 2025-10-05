import React from 'react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: '🔬',
      title: 'Scientific Research',
      description: 'Over 3,000 experiments conducted across multiple disciplines'
    },
    {
      icon: '🌍',
      title: 'Earth Observation',
      description: 'Monitoring climate change and natural disasters from unique vantage point'
    },
    {
      icon: '🧬',
      title: 'Medical Advances',
      description: 'Breakthroughs in disease research and medical technology development'
    },
    {
      icon: '🚀',
      title: 'Technology Innovation',
      description: 'Development of new materials, systems, and space technologies'
    }
  ];

  return (
    <section className="about-section animate-section">
      <h2>KEY ACHIEVEMENTS</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};