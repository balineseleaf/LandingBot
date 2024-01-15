import './Steps.css'
import React from "react";
import { useTranslation } from 'react-i18next';

const Steps = () => {
  const { t } = useTranslation();

  return (
    <div className="steps">
      <div className="steps__wrapper">
        <h2 className="steps__header">Всего НЕСКОЛЬКО ШАГОВ и
          клиенты начнут записываться!</h2>
        <div className="steps__container">
          <div className="steps__block first">
            <p className='steps__text steps__text_first'>Нажмите накнопку "Запрос на подтверждение".</p>
            <div className="steps__circle"><p className='steps__number'>4</p></div>
          </div>
          <div className="steps__block second">
            <p className='steps__text'>Укажите свой рабочий график.</p>
            <div className="steps__circle"><p className='steps__number'>3</p></div>
          </div>
          <div className="steps__block third">
            <p className='steps__text'>Добавьте все процедуры, которые вы выполняете.</p>
            <div className="steps__circle"><p className='steps__number'>2</p></div>
          </div>
          <div className="steps__block fourth">
            <p className='steps__text steps__text-fourth'>Перейдите в раздел "Мои Данные" и заполните информацию о себе.</p>
            <div className="steps__circle"><p className='steps__number'>1</p></div>
          </div>
          {/* <p className='a'>Автоматизируйте рутинную работу и забудьте о проблемах ведения ежедневника</p> */}
        </div>
      </div>
    </div>
  );
}

export default Steps;