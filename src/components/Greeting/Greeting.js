import './Greeting.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = [" маникюр", " педикюр", " шугаринг", " стрижку"];
  const sentence1 = "Ваши клиенты записываются к вам на ";
  const sentence2 = " пока вы занимаетесь своими делам";


  useEffect(() => {
    const showNextText = () => {
      setCurrentTextIndex((currentIndex) => (currentIndex + 1) % animatedTexts.length);
    };
    const intervalId = setInterval(showNextText, 1000);
    return () => clearInterval(intervalId);
  }, [animatedTexts]);
  return (
    <div className='greeting'>
      <div className='greeting__wrapper'>
        <h1 className='greeting__header'>
          Бесплатная платформа для <br /> мастеров красоты
        </h1>
        <div className='greeting__container'>
          <div className="greeting__text-container">
            {animatedTexts.map((text, index) => (
              <span key={index} className={`greeting__animated-text ${currentTextIndex === index ? 'greeting__animated-text-visible' : ''}`}>
                {sentence1} {text} {sentence2}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>);
}

export default Greeting;