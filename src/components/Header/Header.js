import React from "react";
import { Link } from "react-router-dom";
import telegram from "../../images/iconTgNew.png";
import insta from "../../images/iconIGNew.png";
import { useTranslation } from "react-i18next";
import logoO from '../../images/logoO.png';
import "./Header.css";

const Header = () => {

  const { i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__block">
          <img className="header__logo" src={logoO} alt="Logo" />
          <h1 className="header__text">koshko</h1>
        </div>
        <ul className="header__lang-links">
          <div className="langbox">
            {/* {i18n.language === "ru" && (
              <button className="lang__button_eng" onClick={() => handleChangeLanguage("en")}>EN</button>
            )}
            {i18n.language === "en" && (
              <button className="lang__button_ru" onClick={() => handleChangeLanguage("ru")}>RU</button>
            )} */}
            <button className={`lang__button_eng ${i18n.language === "en" ? "active" : ""}`} onClick={() => handleChangeLanguage("en")}>En</button>
            <button className={`lang__button_ru ${i18n.language === "ru" ? "active" : ""}`} onClick={() => handleChangeLanguage("ru")}>Ru</button>
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