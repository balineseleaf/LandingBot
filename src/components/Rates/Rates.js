import './Rates.css'

const Rates = () => {
  return (
    <div className="rates">
      <div className="rates__wrapper">
        <h2 className="rates__header">Тарифы для частных мастеров</h2>
        <div className="card-grid">
          <div className="card" href="#">
            <div className="card-background" ></div>
            <div className="card-content">
              <p className="card-heading">Free</p>
              <p className="card-price">Бесплатно на весь период</p>
              <p className="card-bottom-text">Подробнее</p>
            </div>
          </div>

          <div className="card" href="#">
            <div className="card-background" ></div>
            <div className="card-content">
              <p className="card-heading">Pro</p>
              <p className="card-price">300р / месяц</p>
              <p className="card-bottom-text">Подробнее</p>
            </div>
          </div>

          <div className="card" href="#">
            <div className="card-background"></div>
            <div className="card-content">
              <p className="card-heading">Lite Start</p>
              <p className="card-price">2% с каждой записи</p>
              <p className="card-bottom-text">Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;