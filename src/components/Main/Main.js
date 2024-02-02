import React from "react";
import "./Main.css";
import { useTranslation } from "react-i18next";
import onlineCheck from '../../images/onlineCheck.png';
import calendar from '../../images/calendar.png';
import notification from '../../images/notif.png';
import reviews from '../../images/reviews.png';
import analitics from '../../images/analitics.png';
import qrcode from '../../images/qrcode.png';
import clients from '../../images/clients.png';
import automation from '../../images/automat.png';
import history from '../../images/notebook.png';
import mailing from '../../images/mailing.png';
import language from '../../images/language.png';
import bot from '../../images/bot.png';

const Main = () => {
  const { t } = useTranslation();
  // const [scrolled, setScrolled] = useState(false);
  // // const [backgroundImage, setBackgroundImage] = useState();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const isScrolled = scrollY > 1510;
  //     setScrolled(isScrolled);
  //     if (isScrolled) {
  //       // setBackgroundImage(screenOnPhone2);
  //     } else {
  //       // setBackgroundImage(screenOnPhone);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section id="main" className="main">
      <div className="main__wrapper">
        <h2 className="main__header">{t("Main0")}  {t("Main1")}</h2>
        <div className="main__container">
          <div className="main__item main__item-first">
            <div className="main__block-inner"></div>
            {/* <img src={clipIcon} alt="клипса" className="main__clip"></img> */}
            <img src={onlineCheck} alt="иконка" className="main__icon"></img>
            <p className="main__text main__text-first">{t("Main2")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={notification} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main3")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={calendar} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main4")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={reviews} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main5")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={automation} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main6")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={qrcode} alt="иконка" className="main__icon"></img>
            <p className="main__text main__text-long">{t("Main7")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={analitics} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main8")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={clients} alt="иконка" className="main__icon"></img>
            <p className="main__text main__text-long">{t("Main9")}</p>
          </div>

          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={history} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main11")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={mailing} alt="иконка" className="main__icon"></img>
            <p className="main__text main__text-long">{t("Main12")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={language} alt="иконка" className="main__icon"></img>
            <p className="main__text">{t("Main13")}</p>
          </div>
          <div className="main__item">
            <div className="main__block-inner"></div>
            <img src={bot} alt="иконка" className="main__icon"></img>
            <p className="main__text main__text-long">{t("Main14")}</p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Main;
