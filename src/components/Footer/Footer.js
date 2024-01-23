import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import book from "../../images/blackBookIcon.png";
import telegram from "../../images/iconTgNew.png";

function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <section className="footer">
      <div className="footer__wrapper">
        <p className="footer__heading"></p>
        <div className="footer__content">
          <p className="footer__copyright footer__content-item">© 2024</p>
          <nav className="footer__platforms">
            <div className="footer__info-block">
              <ul className="footer__info-items">
                <li className="footer__info-item">
                  <Link className="footer__info-link" target="_blank" to="/knowledgebase">{t("Footer1")}</Link>
                </li>
                <li className="footer__info-item">
                  <Link className="footer__info-link" target="_blank" to="/partners">{t("Footer3")}</Link>
                </li>
              </ul>
            </div>
            <div className="footer__langbox">
              {i18n.language === "ru" && (
                <button className="footer__lang-button_eng" onClick={() => changeLanguage("en")}>EN</button>
              )}
              {i18n.language === "en" && (
                <button className="footer__lang-button_ru" onClick={() => changeLanguage("ru")}>RU</button>
              )}
            </div>
            <div className="footer__clients-block">
              <p className="footer__text">{t("Footer4")}</p>
              <Link className="footer__socials-link" target="_blank" to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23">
                <img alt="telegram" src={book} className="footer__link" />
              </Link>
              <Link className="footer__socials-link" target="_blank" to="https://t.me/maniProMaster_bot">
                <img alt="telegram" src={telegram} className="footer__link" />
              </Link>
            </div>
            <div className="footer__masters-block">
              <p className="footer__text">{t("Footer5")}</p>
              <Link className="footer__socials-link" target="_blank" to="https://telegra.ph/Telegram-bot-dlya-zapisi-k-byuti-masteru-09-19">
                <img alt="telegram" src={book} className="footer__link" />
              </Link>
              <Link className="footer__socials-link" target="_blank" to="https://t.me/maniPro_bot">
                <img alt="telegram" src={telegram} className="footer__link" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Footer;