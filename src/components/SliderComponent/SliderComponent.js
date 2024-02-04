import "./SliderComponent.css";
import { useTranslation } from "react-i18next";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const SliderComponent = () => {
  const { t } = useTranslation();

  return (
    <section className="slider">
      <div className="slider__wrapper">
        <h1 className="swiper__header"><span className="swiper__letter"><span className="swiper__first-letter">O</span>koshko</span>{t("Options1")}</h1>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3200 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="swiper__container">
              <p className="swiper__caption ">{t("Options2")}</p>
              <p className="swiper__text ">{t("Options6")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <p className="swiper__caption ">{t("Options3")}</p>
              <p className="swiper__text ">{t("Options7")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <p className="swiper__caption">{t("Options9")}</p>
              <p className="swiper__text">{t("Options10")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <p className="swiper__caption">{t("Options5")}</p>
              <p className="swiper__text">{t("Options11")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <p className="swiper__caption">{t("Options12")}</p>
              <p className="swiper__text">{t("Options13")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section >



  );
}

export default SliderComponent;