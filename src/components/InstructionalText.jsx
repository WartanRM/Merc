import React, { useEffect, useState } from 'react';
import './InstructionalText.css';

const InstructionalText = ({ onClose }) => {
  const message = "Click on a race for more details!";
  const [visibleWords, setVisibleWords] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisibleWords(message.split(' '));
      setTimeout(() => {
        setIsVisible(false);
        onClose();
      },5000); // Adjust the timeout as needed
    }, 500); // Initial delay before showing the message

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className={`instruction-text-container ${!isVisible ? 'fade-out' : ''}`}>
      <button className="close-button" onClick={onClose}>X</button>
      <div className="instruction-text">
        {visibleWords.join(' ')}
      </div>
    </div>
  );
};

export default InstructionalText;