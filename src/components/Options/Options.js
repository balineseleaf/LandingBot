import "./Options.css";
import clipIcon from "../../images/clipsIcon.png";

const Options = () => {
  return (
    <section className="options">
      <div className="options__wrapper">
        <h1 className="options__header">Okoshko упростит вам жизнь следующими опциями</h1>
        <div className="options__main-container">
          <div className="options__container-left">
            <div className="options__container-inner left-container">
              <p className="options__caption options__caption_first">Привлекайте новых клиентов 24/7</p>
              <p className="options__text options__text_first">Все что необходимо это заполнить расписание и добавить все ваши услуги. Приложение будет автоматический подбирать вам  клиентов, вам остается лишь качественно выполнять услуги</p>
            </div>
            <div className="options__container-inner">
              <div className="options__container-little">
                <p className="options__caption options__caption_second">Автоматические уведомления</p>
                <p className="options__text options__text_second">Нет необходимости вручную рассылать клиентам напоминания</p>
              </div>
              <div className="options__container-little">
                <p className="options__caption options__caption_third">Велком мессадж</p>
                <p className="options__text options__text_third">Если не хотите публиковать свой адрес, добавьте его в велком мессадж, который будет приходить за сутки дозаписи вашему клиенту</p>
              </div>
            </div>
          </div>
          <div className="options__container-right">
            <div className="options__container-inner-row">
              <div className="options__container-little">
                <p className="options__caption">Генерируйте ссылку  или QR для ваших  клиентов</p>
                <p className="options__text">Вы можете распечатать qr код  или выложить ссылку в соц сетях для привлечения новых  клиентов
                </p>
              </div>
              <div className="options__container-little third-container">
                <p className="options__caption">Аналитика клиентов
                </p>
                <p className="options__text">Держите под контролем своих клиентов, делайте им рассылки со скидками или специальными  предложениями</p>
              </div>
            </div>
            <div className="options__container-inner-row right-container">
              <img src={clipIcon} alt="скрепка" className="options__clip" />
              <p className="options__caption options__caption_wide">Круглосуточная поддержка и сопровождение</p>
              <p className="options__text options__text_wide">Мы всегда готовы оказать вам поддержку на каждом этапе сотрудничества. Наша команда гарантирует не только помощь с начальными шагами, но и непрерывную связь на протяжении всего сотрудничества.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Options;


