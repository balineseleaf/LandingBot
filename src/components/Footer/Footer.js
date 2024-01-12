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
    <div className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__heading'></p>
        <div className='footer__content'>
          <p className='footer__copyright footer__content-item'>© 2024</p>
          <nav className='footer__platforms'>
            <div className='footer__info-block'>
              <ul className='footer__info-items'>
                <li className='footer__info-item'>
                  {/* <p className='footer__text'>База знаний</p> */}
                  <Link className="footer__info-link" target='_blank' to="/knowledgebase">База знаний</Link>
                </li>
                <li className='footer__info-item'>
                  {/* <p className='footer__text'>О Компании</p> */}
                  <Link className="footer__info-link" target='_blank' to="/aboutCompany">О Компании</Link>
                </li>
              </ul>
            </div>
            <div className="footer__langbox">
              <button className="footer__lang-button_eng" onClick={() => changeLanguage("en")}></button>
              <button className="footer__lang-button_ru" onClick={() => changeLanguage("ru")}></button>
            </div>
            <div className='footer__masters-block'>
              <p className='footer__text'>Для мастеров:</p>
              <Link target='_blank' to="/telegram">
                <img alt='telegram' src={iconTG2} className="footer__link" />
              </Link>
            </div>
            <div className='footer__clients-block'>
              <p className='footer__text'>Для клиентов:</p>
              <Link target='_blank' to="/telegram">
                <img alt='telegram' src={iconTG2} className="footer__link" />
              </Link>
            </div>
          </nav>
        </div>
      </div>


    </div>
  );
}

export default Footer;