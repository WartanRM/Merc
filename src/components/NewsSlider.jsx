import { useState, useEffect, useRef } from 'react';
import img1 from '../assets/silverstone.webp'; 
import img2 from '../assets/w02.jpg'; 
import img3 from '../assets/w03.jpg'; 
import './NewsSlider.css';

const newsItems = [
  { id: 1, image: img1, text: 'Hamilton Wins Silverstone 2024' },
  { id: 2, image: img2, text: 'News Item 2' },
  { id: 3, image: img3, text: 'News Item 3' },
];

const delay = 4000;

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  return (
    <div className="news-slider">
      <div className="news-slider-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="news-slide"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="news-text">{item.text}</div>
          </div>
        ))}
      </div>
      <button className="nav-button prev" onClick={handlePrevClick}>❮</button>
      <button className="nav-button next" onClick={handleNextClick}>❯</button>
      <div className="news-slider-dots">
        {newsItems.map((_, idx) => (
          <div
            key={idx}
            className={`news-slider-dot${currentIndex === idx ? ' active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
