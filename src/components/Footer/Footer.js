import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as Instagram } from '../../images/instagramSVG.svg';
import { ReactComponent as Telegram } from '../../images/telegramSVG.svg';
import { ReactComponent as Facebook } from '../../images/facebookSVG.svg';
// import book from "../../images/blackBookIcon.png";
import telegram from "../../images/footertg2.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <div className="footer__wrapper">
        <p className="footer__heading"></p>
        <div className="footer__content">
          <p className="footer__copyright footer__content-item">© 2024 Okoshko</p>
          <nav className="footer__platforms">
            <div className="header__links">
              <Link target="_blank" to="https://www.instagram.com/okoshko.pro?igsh=aG1lZjB6OW5tZzVx">
                <Instagram width="50px" height="50px" className="footer__link-svg-instagram" />
              </Link>
            </div>
            <div className="header__links">
              <Link target="_blank" to="https://t.me/maniProMaster_bot" className="footer__link-svg-telegram">
                <Telegram className="footer__link-svg-telegram" width="50px" height="50px" />
              </Link>
            </div>
            <div className="header__links">
              <Link target="_blank" to="https://t.me/maniProMaster_bot" className="footer__link-svg-facebook">
                <Facebook className="footer__link-svg-facebook" width="50px" height="42px" />
              </Link>
            </div>
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
            {/* <div className="footer__langbox">
              {i18n.language === "ru" && (
                <button className="footer__lang-button_eng" onClick={() => changeLanguage("en")}>EN</button>
              )}
              {i18n.language === "en" && (
                <button className="footer__lang-button_ru" onClick={() => changeLanguage("ru")}>RU</button>
              )}
            </div> */}
            {/* <div className="footer__clients-block">
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
            </div> */}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Footer;