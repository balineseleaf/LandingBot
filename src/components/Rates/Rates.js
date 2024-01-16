import "./Rates.css"

const Rates = () => {
  return (
    <section className="rates">
      <div className="rates__wrapper">
        <h2 className="rates__header">Тарифы для частных мастеров</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-background_first" ></div>
            <div className="card-content">
              <p className="card-heading">Free</p>
              <ul className="card__list">
                <li className="card__item">Онлайн запись</li>
                <li className="card__item">Уведомления</li>
                <li className="card__item">Генерация ссылок</li>
              </ul>
              <p className="card-price">Бесплатно на весь период</p>
              <p className="card-bottom-text">Подробнее</p>
            </div>
          </div>

          <div className="card">
            <div className="card-background_second" ></div>
            <div className="card-content">
              <p className="card-heading">Pro</p>
              <ul className="card__list">
                <li className="card__item">Онлайн запись</li>
                <li className="card__item">Уведомления</li>
                <li className="card__item">Генерация ссылок</li>
                <li className="card__item">Велком мессадж</li>
                <li className="card__item">Аналитика</li>
              </ul>
              <p className="card-price">300р / месяц</p>
              <p className="card-bottom-text">Подробнее</p>
            </div>
          </div>

          <div className="card">
            <div className="card-background_third"></div>
            <div className="card-content">
              <p className="card-heading">Lite Start</p>
              <ul className="card__list">
                <li className="card__item">Онлайн запись</li>
                <li className="card__item">Уведомления</li>
                <li className="card__item">Генерация ссылок</li>
                <li className="card__item">Велком мессадж</li>
                <li className="card__item">Аналитика</li>
              </ul>
              <p className="card-price">2% с каждой записи</p>
              <p className="card-bottom-text">Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rates;