import './Selection.css';
import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../images/iphone.svg';
import iconSelection1 from '../../images/iconSelection1.png';
import iconSelection2 from '../../images/iconSelection2.png';
import iconSelection3 from '../../images/iconSelection3.png';
import iconSelection4 from '../../images/iconSelection4.png';
import iconSelection5 from '../../images/iconSelection5.png';
import iconSelection6 from '../../images/iconSelection6.png';
import iconSelection7 from '../../images/iconSelection7.png';
import iconSelection8 from '../../images/iconSelection8.png';
import iconSelection9 from '../../images/iconSelection9.png';
import iconSelection10 from '../../images/iconSelection10.png';




const Selection = () => {
  return (
    <div className="selection">
      <div className="selection__wrapper">

        <img className='selection__icon selection__icon-first' src={iconSelection1} alt="иконка1" />
        <img className='selection__icon selection__icon-second' src={iconSelection2} alt="иконка2" />
        <img className='selection__icon selection__icon-third' src={iconSelection3} alt="иконка3" />
        <img className='selection__icon selection__icon-fourth' src={iconSelection4} alt="иконка4" />
        <img className='selection__icon selection__icon-fifth' src={iconSelection5} alt="иконка5" />
        <img className='selection__icon selection__icon-sixth' src={iconSelection6} alt="иконка6" />
        <img className='selection__icon selection__icon-seventh' src={iconSelection7} alt="иконка7" />
        <img className='selection__icon selection__icon-eighth' src={iconSelection8} alt="иконка8" />
        <img className='selection__icon selection__icon-ninth' src={iconSelection9} alt="иконка9" />
        <img className='selection__icon selection__icon-tenth' src={iconSelection10} alt="иконка10" />
        <div className='selection__container'>
          <p className='selection__text'>okoshko <br></br>для мастеров</p>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="selection__button">
            Попробовать бесплатно
          </Link>
          <img className='selection__image' src={phone} alt="половинка телефон" />
        </div>
        <div className='selection__container'>
          <p className="selection__text">okoshko <br></br>для клиентов</p>
          <Link to="https://telegra.ph/Telegram-bot-dlya-zapisi-k-byuti-masteru-09-19" className="selection__button">
            Попробовать бесплатно
          </Link>
          <img className='selection__image' src={phone} alt="половинка телефон" />
        </div>
      </div>
    </div>
  );
}

export default Selection;