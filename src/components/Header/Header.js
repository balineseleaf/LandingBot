import React from 'react';
import { Link } from 'react-router-dom';
import iconIG from '../../images/iconIG.svg';
import iconTG2 from '../../images/iconTG.svg';
import mainIcon from '../../images/mainIcon.jpg';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className="header">
      <div className='header__block'>
        <img className="header__logo" src={mainIcon} alt="Logo" />
        <p className='header__text'>Okoshko</p>
      </div>
      <ul className="header__lang-links">
        <div className="langbox">
          <button className="lang__button" onClick={() => changeLanguage("en")}>EN</button>
          <button className="lang__button" onClick={() => changeLanguage("ru")}>RU</button>
        </div>
        <li className="header__lang-link">
          <Link target='_blank' to="/instagram">
            <img alt='instagram' src={iconIG} className="header__link" />
          </Link>
        </li>
        <li className="header__lang-link">
          <Link target='_blank' to="/telegram">
            <img alt='telegram' src={iconTG2} className="header__link" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;