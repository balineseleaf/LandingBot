import React from "react";
import { useTranslation } from "react-i18next";
import logoO from '../../images/logoO.png';
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {

  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const marker = document.querySelector('.header__items');
  const item = document.querySelectorAll('.header__item');
  function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }
  item.forEach(link => {
    link.addEventListener('click', (e) => {
      indicator(e.target);
    })
  });

  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__block">
          <img className="header__logo" src={logoO} alt="Logo" />
          <h1 className="header__text">koshko</h1>
        </div>
        <nav id="navbar" className="header__navbar">
          <div id="marker" className="header__items"></div>
          <Link className="header__item" to="main" spy={true} smooth={true} offset={-82} duration={500}>{t("Header1")}</Link>
          <Link className="header__item" to="steps" spy={true} smooth={true} offset={-82} duration={500}>{t("Header2")}</Link>
          <Link className="header__item" to="support" spy={true} smooth={true} offset={-82} duration={500}>{t("Header3")}</Link>
          <Link className="header__item" to="options" spy={true} smooth={true} offset={-82} duration={500}>{t("Header4")}</Link>
          <Link className="header__item" to="rates" spy={true} smooth={true} offset={-82} duration={500}>{t("Header5")}</Link>
          <Link className="header__item" to="selection" spy={true} smooth={true} offset={-82} duration={500}>{t("Header6")}</Link>
        </nav>
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