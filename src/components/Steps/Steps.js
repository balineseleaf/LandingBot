import "./Steps.css"
import React from "react";
import { useTranslation } from "react-i18next";
import arrow from '../../images/arrow2.svg'

const Steps = () => {
  const { t } = useTranslation();

  return (
    <section id="steps" className="steps">
      <div className="steps__wrapper">
        <h2 className="steps__header">{t("Steps1")}</h2>
        <h3 className="steps__paragraph">{t("Steps6")}</h3>
        <div className="steps__container">
          <div className="steps__block first">
            <div className="steps__text steps__text_first">{t("Steps5")}</div>
            <img className="steps__image" src={arrow} alt="стрелка" />
          </div>
          <div className="steps__block second">
            <div className="steps__text">{t("Steps4")}</div>
            <img className="steps__image" src={arrow} alt="стрелка" />
          </div>
          <div className="steps__block third ">
            <div className="steps__text steps__text_first">{t("Steps3")}</div>
            <img className="steps__image" src={arrow} alt="стрелка" />
          </div>
          <div className="steps__block fourth">
            <div className="steps__text steps__text_fourth">{t("Steps2")}</div>
            <img className="steps__image" src={arrow} alt="стрелка" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;