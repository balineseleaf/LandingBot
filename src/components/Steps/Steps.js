import "./Steps.css"
import React from "react";
import { useTranslation } from "react-i18next";
import stepman from "../../images/stepman.png";

const Steps = () => {
  const { t } = useTranslation();

  return (
    <section className="steps">
      <div className="steps__wrapper">
        <h2 className="steps__header">{t("Steps1")}</h2>
        <h3 className="steps__paragraph">Автоматизируйте рутинную работу и забудьте о проблемах ведения ежедневника</h3>
        <div className="steps__container">
          <img className="steps__image" src={stepman} alt="stepman" />
          <div className="steps__block first">
            <p className="steps__text steps__text_first">{t("Steps5")}</p>
            <div className="steps__circle"><p className="steps__number">1</p></div>
            <div className="steps__block second">
              <p className="steps__text">{t("Steps4")}</p>
              <div className="steps__circle"><p className="steps__number">2</p></div>
              <div className="steps__block third">
                <p className="steps__text">{t("Steps3")}</p>
                <div className="steps__circle"><p className="steps__number">3</p></div>
                <div className="steps__block fourth">
                  <p className="steps__text steps__text-fourth">{t("Steps2")}</p>
                  <div className="steps__circle"><p className="steps__number">4</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;