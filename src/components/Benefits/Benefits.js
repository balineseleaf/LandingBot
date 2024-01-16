import React from 'react';
import image1 from '../../images/cards-attention.png';
import image2 from '../../images/cards-competence.png';
import image3 from '../../images/cards-interliving.png';
import image4 from '../../images/cards-question.png';
import image5 from '../../images/cards-recall.png';
import { useTranslation } from 'react-i18next';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className='benefits__wrapper'>
        <h2 className="section-title">Наши преимущества</h2>
        <p className="section-subtitle">Что вы получаете, запуская нашего бота</p>
        <div className="cards">
          <div className="cards__item">
            <img className="cards__image" src={image1} alt="Книга в руках" />
            <h3 className="cards__title">Два вида внимания</h3>
            <p className="cards__description">Текст</p>
          </div>
          <div className="cards__item">
            <img className="cards__image" src={image2} alt="Статуя" />
            <h3 className="cards__title">Recall</h3>
            <p className="cards__description">Текст</p>
          </div>
          <div className="cards__item">
            <img className="cards__image" src={image3} alt="Интерливинг" />
            <h3 className="cards__title">Интерливинг</h3>
            <p className="cards__description">Текст</p>
          </div>
          <div className="cards__item">
            <img className="cards__image" src={image4} alt="Картинка с вопросами" />
            <h3 className="cards__title">Вопросы</h3>
            <p className="cards__description">Текст</p>
          </div>
          <div className="cards__item">
            <img className="cards__image" src={image4} alt="Картинка с вопросами" />
            <h3 className="cards__title">Вопросы</h3>
            <p className="cards__description">Текст</p>
          </div>
          <div className="cards__item">
            <img className="cards__image cards__image_last" src={image5} alt="Стопка книг" />
            {/* <h3 className="cards__title">Иллюзия компетентности</h3>
            <p className="cards__description">Текст</p> */}
          </div>
        </div>
      </div>
    </section>

  );
}

export default Benefits;