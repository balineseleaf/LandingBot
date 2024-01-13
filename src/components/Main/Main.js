import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Main.css';
import iphone from '../../images/iphone.svg';

const Main = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = [" маникюр", " педикюр", " шугаринг", " стрижку"];
  const sentence = "С помощью нашего приложения вы с легкостью сможете записаться на ";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10); // Измените значение, чтобы задать порог прокрутки
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const showNextText = () => {
      setCurrentTextIndex((currentIndex) => (currentIndex + 1) % animatedTexts.length);
    };
    const intervalId = setInterval(showNextText, 1000);
    return () => clearInterval(intervalId);
  }, [animatedTexts]);

  return (
    <div className="main">
      <div className={`main__wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="text-container">
          {animatedTexts.map((text, index) => (
            <span key={index} className={`animated-text ${currentTextIndex === index ? 'visible' : ''}`}>
              {sentence} {text}
            </span>
          ))}
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="main__button">
            Попробовать бесплатно
          </Link>
        </div>
        <img className={`main__image ${scrolled ? 'scrolled' : ''}`} src={iphone} alt="iPhone" />
        {/* <div>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="main__button">
            Попробовать бесплатно
          </Link>
        </div> */}
      </div>
    </div>

  );
}

export default Main;
