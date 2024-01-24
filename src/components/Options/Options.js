import "./Options.css";
import clipIcon from "../../images/clipIcon2.png";
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Options = () => {
  const { t } = useTranslation();
  return (
    <section className="options">
      <div className="options__wrapper">
        <h1 className="options__header"><span className="options__letter"><span className="options__first-letter">O</span>koshko</span>{t("Options1")}</h1>
        <div className="options__main-container">
          <div className="options__container-left">
            <div className="options__container-inner left-container">
              <p className="options__caption options__caption_first">{t("Options2")}</p>
              <p className="options__text options__text_first">{t("Options6")}</p>
            </div>
            <div className="options__container-inner">
              <div className="options__container-little">
                <p className="options__caption options__caption_second">{t("Options3")}</p>
                <p className="options__text options__text_second">{t("Options7")}</p>
              </div>
              <div className="options__container-little fourth-container">
                <p className="options__caption options__caption_third">{t("Options4")}</p>
                <p className="options__text options__text_third">{t("Options8")}</p>
              </div>
            </div>
          </div>
          <div className="options__container-right">
            <div className="options__container-inner-row">
              <div className="options__container-little fifth-container">
                <p className="options__caption">{t("Options9")}</p>
                <p className="options__text">{t("Options10")}</p>
              </div>
              <div className="options__container-little third-container">
                <p className="options__caption">{t("Options5")}</p>
                <p className="options__text">{t("Options11")}</p>
              </div>
            </div>
            <div className="options__container-inner-row right-container">
              <img src={clipIcon} alt="скрепка" className="options__clip" />
              <p className="options__caption options__caption_wide">{t("Options12")}</p>
              <p className="options__text options__text_wide">{t("Options13")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;


