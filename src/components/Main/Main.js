import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import logoO from '../../images/logoO.png';
import iphone from '../../images/IphoneNew3.svg';
import screenOnPhone from "../../images/screenOnPhone.png";
import screenOnPhone2 from "../../images/screenOnPhone2.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(screenOnPhone);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 1510;
      setScrolled(isScrolled);
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
        <img
          className={`main__image ${scrolled ? "scrolled" : ""}`}
          src={iphone}
          alt="iPhone"
          style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className="main__container">
          <h2 className="main__header">{t("Main0")}  {t("Main1")}</h2>
          <div className="main__container_inner">
            <div className="main__item main__item-first">
              <img className="header__logo" src={logoO} alt="Logo" />
              <p className="main__text main__text-first">{t("Main2")}</p>
            </div>
            <div className="main__item">
              <p className="main__text">{t("Main3")}</p>
            </div>
            <div className="main__item">
              <p className="main__text">{t("Main4")}</p>
            </div>
            <div className="main__item">
              <p className="main__text">{t("Main5")}</p>
            </div>
            <div className="main__item">
              <p className="main__text">{t("Main6")}</p>
            </div>
            <div className="main__item">
              <p className="main__text main__text-long">{t("Main7")}</p>
            </div>
            <div className="main__item">
              <p className="main__text">{t("Main8")}</p>
            </div>
            <div className="main__item">
              <p className="main__text">{t("Main9")}</p>
            </div>
            <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="main__button">
              {t("Main10")}
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Main;
