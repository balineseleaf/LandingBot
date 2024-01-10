import './Rates.css'

const Rates = () => {
  return (
    <div className='rates__wrapper'>
      <div class="price-section">
        <h1 class="title">Подберите для себя необходимый тариф</h1>
        <p class="subtitle">Подойдет для всех типов мастеров</p>
        <div class="cards">

          <div class="card yellow-card">
            <div class="card__info">
              <h2 class="card__title">Базовый</h2>
              <span class="card__subtitle">Попробовать и убедиться</span>
              <span class="card__currency">$</span>
              <span class="card__price">99</span>
              <ul class="card__lists">
                <li class="card__list">Опция</li>
                <li class="card__list">Опция</li>
              </ul>
            </div>
            <div class="card__btn">
              <a class="card__btn-link" href="http://#">Попробовать сейчас</a>
            </div>

          </div>


          <div class="card azure-card">
            <div class="card__info">
              {/* <div class="card__image-container card__image-container-azure">
<img class="card__image" src="" alt="toy car" />
</div> */}
              <h2 class="card__title">Расширенный</h2>
              <span class="card__subtitle">Процент от сделок</span>
              <span class="card__currency">$</span>
              <span class="card__price">179</span>
              <ul class="card__lists">
                <li class="card__list">Опция</li>
                <li class="card__list">Опция</li>
                <li class="card__list">Опция</li>
              </ul>
            </div>
            <div class="card__btn">
              <a class="card__btn-link" href="http://#">Попробовать сейчас</a>
            </div>

          </div>

          <div class="card blue-card">
            <div class="card__info">
              {/* <div class="card__image-container card__image-container-blue">
<img class="card__image" src="" alt="minibus" />
</div> */}
              <h2 class="card__title">ПРО</h2>
              <span class="card__subtitle">Дает много плюшек</span>
              <span class="card__currency">$</span>
              <span class="card__price">269</span>
              <ul class="card__lists">
                <li class="card__list">Опция</li>
                <li class="card__list">Опция</li>
                <li class="card__list">Опция</li>
                <li class="card__list">Опция</li>
              </ul>
            </div>
            <div class="card__btn">
              <a class="card__btn-link" href="http://#">Попробовать сейчас</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;