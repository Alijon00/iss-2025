import React, { useState } from 'react';
import { Modal } from './modal';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswer = (question: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = () => {
    const score = Object.keys(answers).length;
    alert(`Quiz completed! You scored ${score}/2! 🚀`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Astronaut Readiness Quiz">
      <div className="quiz-content">
        <div className="quiz-question">
          <h4>What would you do in microgravity?</h4>
          <div className="quiz-options">
            {['Float effortlessly', 'Get space sick', 'Become super strong'].map((option) => (
              <label key={option}>
                <input 
                  type="radio" 
                  name="q1" 
                  value={option}
                  onChange={() => handleAnswer('q1', option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        
        <div className="quiz-question">
          <h4>How long can you stay in space?</h4>
          <div className="quiz-options">
            {['6 months', '1 year', 'Forever!'].map((option) => (
              <label key={option}>
                <input 
                  type="radio" 
                  name="q2" 
                  value={option}
                  onChange={() => handleAnswer('q2', option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        
        <button className="submit-quiz" onClick={handleSubmit}>
          Launch Results 🚀
        </button>
      </div>
    </Modal>
  );
};