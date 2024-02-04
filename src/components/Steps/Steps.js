import "./Steps.css"
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import arrow from '../../images/arrow2.svg';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Steps = () => {
  const { t } = useTranslation();
  const [useSwiper, setUseSwiper] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const shouldUseSwiper = window.innerWidth <= 650;
      setUseSwiper(shouldUseSwiper);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="steps" className="steps">
      <div className="steps__wrapper">
        <h2 className="steps__header">{t("Steps1")}</h2>
        <h3 className="steps__paragraph">{t("Steps6")}</h3>
        <div className="steps__container">
          {useSwiper ? (
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="steps__block first">
                  <div className="steps__text steps__text_first">{t("Steps5")}</div>
                  <img className="steps__image" src={arrow} alt={t("Arrow")} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="steps__block second">
                  <div className="steps__text">{t("Steps4")}</div>
                  <img className="steps__image" src={arrow} alt={t("Arrow")} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="steps__block third ">
                  <div className="steps__text steps__text_first">{t("Steps3")}</div>
                  <img className="steps__image" src={arrow} alt={t("Arrow")} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="steps__block fourth">
                  <div className="steps__text steps__text_fourth">{t("Steps2")}</div>
                  <img className="steps__image" src={arrow} alt={t("Arrow")} />
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <>
              <div className="steps__block first">
                <div className="steps__text steps__text_first">{t("Steps5")}</div>
                <img className="steps__image" src={arrow} alt={t("Arrow")} />
              </div>
              <div className="steps__block second">
                <div className="steps__text">{t("Steps4")}</div>
                <img className="steps__image" src={arrow} alt={t("Arrow")} />
              </div>
              <div className="steps__block third ">
                <div className="steps__text steps__text_first">{t("Steps3")}</div>
                <img className="steps__image" src={arrow} alt={t("Arrow")} />
              </div>
              <div className="steps__block fourth">
                <div className="steps__text steps__text_fourth">{t("Steps2")}</div>
                <img className="steps__image" src={arrow} alt={t("Arrow")} />
              </div>
            </>
          )}
        </div>
      </div>
    </section >
  );
}

export default Steps;