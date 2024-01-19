import React from "react";
import { Link } from "react-router-dom";
import telegram from "../../images/telegram.png";
import insta from "../../images/insta.png";
import mainIcon from "../../images/mainIcon.png";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

  };
  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__block">
          <img className="header__logo" src={mainIcon} alt="Logo" />
          <h1 className="header__text">Okoshko</h1>
        </div>
        <ul className="header__lang-links">
          <div className="langbox">
            <button className="lang__button_eng" onClick={() => changeLanguage("en")}></button>
            <button className="lang__button_ru" onClick={() => changeLanguage("ru")}></button>
          </div>
          <li className="header__links">
            <Link target="_blank" to="https://www.instagram.com/okoshko.pro?igsh=aG1lZjB6OW5tZzVx">
              <img alt="instagram" src={insta} className="header__link" />
            </Link>
          </li>
          <li className="header__links">
            <Link target="_blank" to="https://t.me/maniProMaster_bot">
              <img alt="telegram" src={telegram} className="header__link" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;