import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
// import iphone from "../../images/iphone.svg";
import iphone from '../../images/IphoneNew3.svg';
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
import clipIcon from "../../images/clipIcon2.png";
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
          <h2 className="main__header">{t("Main0")}<br />{t("Main1")}</h2>
          <div className="main__container_inner">
            <div className="main__item main__item-first">
              <img src={clipIcon} alt="скрепка" className="main__clip" />
              <img className="main__icon" src={icon10} alt="иконка1" />
              <p className="main__text">{t("Main2")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon11} alt="иконка2" />
              <p className="main__text">{t("Main3")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon12} alt="иконка3" />
              <p className="main__text">{t("Main4")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon13} alt="иконка4" />
              <p className="main__text">{t("Main5")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon14} alt="иконка5" />
              <p className="main__text">{t("Main6")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon15} alt="иконка6" />
              <p className="main__text main__text-long">{t("Main7")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon16} alt="иконка7" />
              <p className="main__text">{t("Main8")}</p>
            </div>
            <div className="main__item">
              <img className="main__icon" src={icon17} alt="иконка8" />
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
