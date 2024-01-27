import React from "react";
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
            <button className={`lang__button_eng ${i18n.language === "en" ? "active" : ""}`} onClick={() => handleChangeLanguage("en")}>En</button>
            <button className={`lang__button_ru ${i18n.language === "ru" ? "active" : ""}`} onClick={() => handleChangeLanguage("ru")}>Ru</button>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Header;