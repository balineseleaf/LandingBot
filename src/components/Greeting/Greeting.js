import "./Greeting.css";
import React, { useEffect, useState, useRef } from "react";
import logoO from '../../images/logoO.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typed from 'typed.js';
// import { useLanguage } from "../../utils/context.js";

const Greeting = () => {
  const { t, i18n } = useTranslation();

  const elRu = useRef(null);
  const elEn = useRef(null);
  const [isVisible, setIsVisible] = useState(i18n.language == "ru");
  const [currentDay, setCurrentDay] = useState(new Date().getDate());


  useEffect(() => {
    const typedRu = new Typed(elRu.current, {
      strings: ["МАНИКЮР", "ШУГАРИНГ", "ПЕДИКЮР", "СТРИЖКУ"],
      typeSpeed: 90,
      loop: true,
    });

    const typedEn = new Typed(elEn.current, {
      strings: ["MANICURE", "SUGARING", "PEDICURE", "HAIRCUT"],
      typeSpeed: 90,
      loop: true,
    });

    return () => {
      typedRu.destroy();
      typedEn.destroy();
    };

  }, [i18n.language]);


  return (
    <section className="greeting">
      <div className="greeting__wrapper">
        <div className="greeting__image_block">
          <img className="greeting__image_logo" src={logoO} alt="логотип" />
          {/* <div className="greeting__image_second"></div> */}
          <div className="greeting__current-day">
            {currentDay}
          </div>
        </div>
        <h1 className="greeting__header">
          {t("Greeting0")} {t("Greeting1")}<br /> {t("Greeting2")}
        </h1>
        <div className="greeting__container">
          <div className="greeting__text-container">
            <h2 id="ru" className={`greeting__text ${isVisible ? 'visible' : 'hidden'}`}>
              {t("Greeting3")} < br /><span ref={elRu} className="text"></span><br /> {t("Greeting4")}
            </h2>
            <h2 id="en" className={`greeting__text ${!isVisible ? 'visible' : 'hidden'}`}>
              {t("Greeting3")} < br /><span ref={elEn} className="text"></span><br /> {t("Greeting4")}
            </h2>
            {/* <h2 className="greeting__text">
              
              {t("Greeting3")}  <span ref={elEn} className="text"></span><br />  {t("Greeting4")}
            </h2> */}
          </div>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="greeting__button">
            {t("Main10")}
          </Link>
        </div>
      </div>
    </section >
  );
}

export default Greeting;
