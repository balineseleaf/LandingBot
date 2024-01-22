import './Selection.css';
import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../images/IphoneNew3.svg';
// import iconSelection1 from '../../images/selectionIconNew3.png';
// import iconSelection2 from '../../images/selectionIconNew9.png';
// import iconSelection3 from '../../images/selectionIconNew10.png';
// import iconSelection4 from '../../images/selectionIconNew7.png';
// import iconSelection5 from '../../images/selectionIconNew6.png';
// import iconSelection6 from '../../images/selectionIconNew2.png';
// import iconSelection7 from '../../images/selectionIconNew5.png';
// import iconSelection8 from '../../images/selectionIconNew8.png';
// import iconSelection9 from '../../images/selectionIconNew.png';
// import iconSelection10 from '../../images/calendar4.png';
// import iconSelection11 from '../../images/selectionIconNew11.png';
import { useTranslation } from "react-i18next";

const Selection = () => {
  const { t } = useTranslation();
  return (
    <section className="selection">
      <div className="selection__wrapper">
        {/* <img className='selection__icon selection__icon-first' src={iconSelection1} alt="иконка1" />
        <img className='selection__icon selection__icon-second' src={iconSelection2} alt="иконка2" />
        <img className='selection__icon selection__icon-third' src={iconSelection3} alt="иконка3" />
        <img className='selection__icon selection__icon-fourth' src={iconSelection4} alt="иконка4" />
        <img className='selection__icon selection__icon-fifth' src={iconSelection5} alt="иконка5" />
        <img className='selection__icon selection__icon-sixth' src={iconSelection6} alt="иконка6" />
        <img className='selection__icon selection__icon-seventh' src={iconSelection7} alt="иконка7" />
        <img className='selection__icon selection__icon-eighth' src={iconSelection8} alt="иконка8" />
        <img className='selection__icon selection__icon-ninth' src={iconSelection9} alt="иконка9" />
        <img className='selection__icon selection__icon-tenth' src={iconSelection10} alt="иконка10" />
        <img className='selection__icon selection__icon-eleventh' src={iconSelection11} alt="иконка11" /> */}
        <div className='selection__container'>
          <img className='selection__image' src={phone} alt="половинка телефон" />
          <div className='selection__square-block-left'>
            <p className='selection__text'><span className='selection__text_bold'>Okoshko</span> <br></br>{t("Selection1")}</p>
            <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="selection__button">
              {t("Selection3")}
            </Link>
          </div>
        </div>
        <div className='selection__container'>
          <img className='selection__image selection__image-right' src={phone} alt="половинка телефон" />
          <div className='selection__square-block-right'>
            <p className="selection__text"><span className='selection__text_bold'>Okoshko</span><br></br>{t("Selection2")}</p>
            <Link to="https://telegra.ph/Telegram-bot-dlya-zapisi-k-byuti-masteru-09-19" className="selection__button">
              {t("Selection3")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Selection;