import React from 'react';

export const Timeline: React.FC = () => {
  const milestones = [
    { year: '1998', event: 'First module Zarya launched', detail: 'Beginning of ISS assembly' },
    { year: '2000', event: 'First expedition crew', detail: 'Continuous human presence begins' },
    { year: '2008', event: 'Columbus laboratory added', detail: 'ESA joins permanent research' },
    { year: '2011', event: 'Final shuttle mission', detail: 'Completion of US assembly' },
    { year: '2020', event: 'Commercial Crew Program', detail: 'New era of space transportation' },
    { year: '2023', event: '25 years in orbit', detail: 'Celebrating quarter century' }
  ];

  return (
    <section className="about-section animate-section">
      <h2>HISTORICAL TIMELINE</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{milestone.year}</div>
            <div className="timeline-content">
              <h4>{milestone.event}</h4>
              <p>{milestone.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};