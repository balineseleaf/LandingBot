import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import iconTG2 from '../../images/iconTG.svg';
import iconIG from '../../images/iconIG.svg';

function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='footer section section_size_narrow section_screen_narrow'>
      <p className='footer__heading'>
        Okoshko
      </p>
      <div className='footer__content'>
        <p className='footer__copyright footer__content-item'>© 2024</p>
        <nav className='footer__platforms'>
          <div className="footer__langbox">
            <button className="lang__button" onClick={() => changeLanguage("en")}>EN</button>
            <button className="lang__button" onClick={() => changeLanguage("ru")}>RU</button>
          </div>
          <li className="footer__icon-link">
            <Link target='_blank' to="/instagram">
              <img alt='instagram' src={iconIG} className="footer__link" />
            </Link>
          </li>
          <li className="footer__icon-link">
            <Link target='_blank' to="/telegram">
              <img alt='telegram' src={iconTG2} className="footer__link" />
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Footer;