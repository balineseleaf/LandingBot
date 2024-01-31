import "./Rates.css";
import { useTranslation } from "react-i18next";

const Rates = () => {
  const { t } = useTranslation();

  return (
    <section id="rates" className="rates">
      <div className="rates__wrapper">
        <h2 className="rates__header">{t("Rates1")}</h2>
        <p className="rates__paragraph">{t("Rates11")}</p>
        <div className="card-grid">
          <div className="card">
            <div className="card-background_first" ></div>
            <div className="card__block-inner"></div>
            <div className="card-content">
              <p className="card-heading card-heading-first">Free</p>
              <ul className="card__list">
                <li className="card__item">{t("Rates2")}</li>
                <li className="card__item">{t("Rates3")}</li>
                <li className="card__item">{t("Rates4")}</li>
              </ul>
              <p className="card__price card__price-additional">{t("Rates8")}</p>
              <p className="card-bottom-text">{t("Rates7")}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-background_second" ></div>
            <div className="card__block-inner"></div>
            <div className="card-content">
              <p className="card-heading">Pro</p>
              <ul className="card__list">
                <li className="card__item">{t("Rates2")}</li>
                <li className="card__item">{t("Rates3")}</li>
                <li className="card__item">{t("Rates4")}</li>
                <li className="card__item">{t("Rates5")}</li>
                <li className="card__item">{t("Rates6")}</li>
              </ul>
              <p className="card__price card__price-additional">{t("Rates9")}</p>
              <p className="card-bottom-text">{t("Rates7")}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-background_third"></div>
            <div className="card__block-inner"></div>
            <div className="card-content">
              <p className="card-heading">Lite Start</p>
              <ul className="card__list">
                <li className="card__item">{t("Rates2")}</li>
                <li className="card__item">{t("Rates3")}</li>
                <li className="card__item">{t("Rates4")}</li>
                <li className="card__item">{t("Rates5")}</li>
                <li className="card__item">{t("Rates6")}</li>
              </ul>
              <p className="card__price card__price-additional">{t("Rates10")}</p>
              <p className="card-bottom-text">{t("Rates7")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rates;