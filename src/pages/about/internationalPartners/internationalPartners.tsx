import React from 'react';

export const InternationalPartners: React.FC = () => {
  const partners = [
    { name: 'NASA', country: 'United States', role: 'Program management and major modules' },
    { name: 'Roscosmos', country: 'Russia', role: 'Core modules and crew transportation' },
    { name: 'ESA', country: 'European Space Agency', role: 'Columbus laboratory and ATV' },
    { name: 'JAXA', country: 'Japan', role: 'Kibo laboratory and HTV cargo' },
    { name: 'CSA', country: 'Canada', role: 'Mobile Servicing System and robotics' }
  ];

  return (
    <section className="about-section animate-section">
      <h2>INTERNATIONAL PARTNERS</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <h3>{partner.name}</h3>
            <p className="country">{partner.country}</p>
            <p className="role">{partner.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};