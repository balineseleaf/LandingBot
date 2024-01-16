import React from "react";
import { Link } from "react-router-dom";
import iconIG from "../../images/iconIG.svg";
import iconTG2 from "../../images/iconTG.svg";
import mainIcon from "../../images/mainIcon.png";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="header">
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
              <img alt="instagram" src={iconIG} className="header__link" />
            </Link>
          </li>
          <li className="header__links">
            <Link target="_blank" to="https://t.me/maniProMaster_bot">
              <img alt="telegram" src={iconTG2} className="header__link" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;