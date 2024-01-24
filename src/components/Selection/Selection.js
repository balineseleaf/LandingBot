import './Selection.css';
import React from 'react';
import { Link } from 'react-router-dom';
import phoneLeft from '../../images/Phone 03 Screen.png';
import phoneRight from '../../images/Phone 04 Screen.png';
import { useTranslation } from "react-i18next";

const Selection = () => {
  const { t } = useTranslation();
  return (
    <section className="selection">
      <div className="selection__wrapper">
        <div className='selection__container selection__container-left'>
          <img className='selection__image selection__image-left' src={phoneLeft} alt="телефон" />
          <div className="selection__card-left">
            <p className='selection__text'><span className='selection__text_bold'><span>O</span>koshko</span> <br></br>{t("Selection2")}</p>
            <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="selection__button">
              {t("Selection3")}
            </Link>
          </div>
        </div>
        <div className='selection__container selection__container-right'>
          <img className='selection__image selection__image-right' src={phoneRight} alt="телефон" />
          <div className="selection__card-right">
            <p className='selection__text'><span className='selection__text_bold'><span>O</span>koshko</span> <br></br>{t("Selection1")}</p>
            <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="selection__button">
              {t("Selection3")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Selection;