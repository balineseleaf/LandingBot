import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as Instagram } from '../../images/instSVG.svg';
import { ReactComponent as Telegram } from '../../images/telegramSVG.svg';
import { ReactComponent as Facebook } from '../../images/facebookSVG.svg';


function Footer() {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <div className="footer__wrapper">
        <p className="footer__heading"></p>
        <div className="footer__content">
          <p className="footer__copyright footer__content-item">© 2024 Okoshko</p>
          <nav className="footer__platforms">
            <div className="footer__info-block">
              <ul className="footer__info-items">
                <li >
                  <Link className="footer__info-item" target="_blank" to="/knowledgebase">{t("Footer1")}</Link>
                </li>
                <li>
                  <Link className="footer__info-item" target="_blank" to="/knowledgebase">{t("Footer0")}</Link>
                </li>
                <li >
                  <Link className="footer__info-item" target="_blank" to="/partners">{t("Footer3")}</Link>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <div className="footer__link">
                <Link target="_blank" to="https://www.instagram.com/okoshko.pro?igsh=aG1lZjB6OW5tZzVx">
                  <Instagram className="footer__link-svg-instagram" />
                </Link>
              </div>
              <div className="footer__link">
                <Link target="_blank" to="https://t.me/maniProMaster_bot" className="footer__link-svg-telegram">
                  <Telegram className="footer__link-svg-telegram" />
                </Link>
              </div>
              <div className="footer__link">
                <Link onClick={(e) => e.preventDefault()} target="_blank" to="https://t.me/maniProMaster_bot" className="footer__link-svg-facebook disable">
                  <Facebook className="footer__link-svg-facebook" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Footer;