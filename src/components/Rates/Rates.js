import './Rates.css'

const Rates = () => {
  return (
    <div className='rates__wrapper'>
      <div className="price-section">
        <h1 className="title">Подберите для себя необходимый тариф</h1>
        <p className="subtitle">Подойдет для всех типов мастеров</p>
        <div className="cards">

          <div className="card yellow-card">
            <div className="card__info">
              <h2 className="card__title">Базовый</h2>
              <span className="card__subtitle">Попробовать и убедиться</span>
              <span className="card__currency">$</span>
              <span className="card__price">99</span>
              <ul className="card__lists">
                <li className="card__list">Опция</li>
                <li className="card__list">Опция</li>
              </ul>
            </div>
            <div className="card__btn">
              <a className="card__btn-link" href="http://#">Попробовать сейчас</a>
            </div>

          </div>


          <div className="card azure-card">
            <div className="card__info">
              {/* <div class="card__image-container card__image-container-azure">
<img class="card__image" src="" alt="toy car" />
</div> */}
              <h2 className="card__title">Расширенный</h2>
              <span className="card__subtitle">Процент от сделок</span>
              <span className="card__currency">$</span>
              <span className="card__price">179</span>
              <ul className="card__lists">
                <li className="card__list">Опция</li>
                <li className="card__list">Опция</li>
                <li className="card__list">Опция</li>
              </ul>
            </div>
            <div className="card__btn">
              <a className="card__btn-link" href="http://#">Попробовать сейчас</a>
            </div>

          </div>

          <div className="card blue-card">
            <div className="card__info">
              {/* <div class="card__image-container card__image-container-blue">
<img class="card__image" src="" alt="minibus" />
</div> */}
              <h2 className="card__title">ПРО</h2>
              <span className="card__subtitle">Дает много плюшек</span>
              <span className="card__currency">$</span>
              <span className="card__price">269</span>
              <ul className="card__lists">
                <li className="card__list">Опция</li>
                <li className="card__list">Опция</li>
                <li className="card__list">Опция</li>
                <li className="card__list">Опция</li>
              </ul>
            </div>
            <div className="card__btn">
              <a className="card__btn-link" href="http://#">Попробовать сейчас</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;