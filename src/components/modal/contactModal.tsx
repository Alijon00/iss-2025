import React, { useState } from 'react';
import { Modal } from './modal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert('Message transmitted to Mission Control! 🚀');
    setMessage('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Mission Control">
      <div className="contact-options">
        <div className="contact-card">
          <h4>📡 Send Message to ISS</h4>
          <p>Write a message that might be transmitted to the crew</p>
          <textarea 
            placeholder="Type your message to astronauts..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="send-btn" onClick={handleSendMessage}>
            Transmit Message
          </button>
        </div>
        
        <div className="contact-card">
          <h4>👨‍🚀 Virtual Tour</h4>
          <p>Take an interactive 3D tour of the space station</p>
          <button className="tour-btn" onClick={() => window.open('https://www.nasa.gov/mission_pages/station/main/index.html', '_blank')}>
            Start Tour
          </button>
        </div>
        
        <div className="contact-card">
          <h4>📞 Live Feed</h4>
          <p>Watch real-time video from ISS cameras</p>
          <button className="live-btn" onClick={() => window.open('https://www.nasa.gov/multimedia/nasatv/iss_ustream.html', '_blank')}>
            View Live Stream
          </button>
        </div>
      </div>
    </Modal>
  );
};