import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Main.css';
import iphone from '../../images/iphone.svg';
import envelope from '../../images/envelope.svg';

const Main = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 550); // Измените значение, чтобы задать порог прокрутки
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="main">
      <div className={`main__wrapper ${scrolled ? 'scrolled' : ''}`}>
        <h2 className="main__header">Весь функционал находится в вашем кармане</h2>
        <img className={`main__image ${scrolled ? 'scrolled' : ''}`} src={iphone} alt="iPhone" />
        <div className="main__container">
          <div className="main__container_inner">
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка1" />
              <p className="main__text">Онлайн запись</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка2" />
              <p className="main__text">Уведомления</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка3" />
              <p className="main__text">Удобный календарь</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка4" />
              <p className="main__text">Отзывы</p>
            </div>
          </div>
          <div className="main__container_inner">
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка5" />
              <p className="main__text">Велком мессадж</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка6" />
              <p className="main__text main__text-long">Уникальный QR код для клиента
              </p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка7" />
              <p className="main__text">Аналитика</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={envelope} alt="иконка8" />
              <p className="main__text">Ведение базы клиентов</p>
            </div>
            <div>
              <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="main__button">
                Попробовать бесплатно
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Main;
