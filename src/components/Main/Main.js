import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import iphone from "../../images/iphone.svg";
import icon10 from "../../images/icon10.png";
import icon11 from "../../images/icon11.png";
import icon12 from "../../images/icon12.png";
import icon13 from "../../images/icon13.png";
import icon14 from "../../images/icon14.png";
import icon15 from "../../images/icon15.png";
import icon16 from "../../images/icon16.png";
import icon17 from "../../images/icon17.png";
import screenOnPhone from "../../images/screenOnPhone.png";
import screenOnPhone2 from "../../images/screenOnPhone2.png";
import clipIcon from "../../images/clipsIcon.png";

const Main = () => {
  const [scrolled, setScrolled] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(screenOnPhone);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setScrolled(scrollY > 510); // Измените значение, чтобы задать порог прокрутки
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      //setScrolled(scrollY > 450);
      const isScrolled = scrollY > 550;
      setScrolled(isScrolled);

      //if (scrollY > 1080) {
      if (isScrolled) {
        setBackgroundImage(screenOnPhone2);
      } else {
        setBackgroundImage(screenOnPhone);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="main">
      <div className={`main__wrapper ${scrolled ? "scrolled" : ""}`}>
        <h2 className="main__header">Весь функционал находится в вашем кармане</h2>
        <img
          className={`main__image ${scrolled ? "scrolled" : ""}`}
          src={iphone}
          alt="iPhone"
          style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className="main__container">
          <div className="main__container_inner">
            <img src={clipIcon} alt="скрепка" className="main__clip" />
            <div className="main__item">
              <img className="main__icon" src={icon10} alt="иконка1" />
              <p className="main__text">Онлайн запись</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon11} alt="иконка2" />
              <p className="main__text">Уведомления</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon12} alt="иконка3" />
              <p className="main__text">Удобный календарь</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon13} alt="иконка4" />
              <p className="main__text">Отзывы</p>
            </div>
          </div>
          <div className="main__container_inner">
            <div className="main__item">
              <img className="main__icon" src={icon14} alt="иконка5" />
              <p className="main__text">Велком мессадж</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon15} alt="иконка6" />
              <p className="main__text main__text-long">Уникальный QR код для клиента
              </p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon16} alt="иконка7" />
              <p className="main__text">Аналитика</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon17} alt="иконка8" />
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
    </section>

  );
}

export default Main;
