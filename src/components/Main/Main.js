import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import clipIcon from '../../images/clipIcon2.png'
import { useTranslation } from "react-i18next";
import onlineCheck from '../../images/onlineCheck.png';
import calendar from '../../images/calendar.png';
import notification from '../../images/notif.png';
import reviews from '../../images/reviews.png';
import analitics from '../../images/analitics.png';
import qrcode from '../../images/qrcode.png';
import clients from '../../images/clients.png';
import automation from '../../images/automat.png';

const Main = () => {
  const { t } = useTranslation();
  // const [scrolled, setScrolled] = useState(false);
  // // const [backgroundImage, setBackgroundImage] = useState();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const isScrolled = scrollY > 1510;
  //     setScrolled(isScrolled);
  //     if (isScrolled) {
  //       // setBackgroundImage(screenOnPhone2);
  //     } else {
  //       // setBackgroundImage(screenOnPhone);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="main">
      <div className="main__wrapper">
        <h2 className="main__header">{t("Main0")}  {t("Main1")}</h2>
        <div className="main__block">
          <div className="main__container">
            <div className="main__container_inner">
              <div className="main__item main__item-first">
                <img src={clipIcon} alt="клипса" className="main__clip"></img>
                <img src={onlineCheck} alt="иконка" className="main__icon"></img>
                <p className="main__text main__text-first">{t("Main2")}</p>
              </div>
              <div className="main__item">
                <img src={notification} alt="иконка" className="main__icon"></img>
                <p className="main__text">{t("Main3")}</p>
              </div>
              <div className="main__item">
                <img src={calendar} alt="иконка" className="main__icon"></img>
                <p className="main__text">{t("Main4")}</p>
              </div>
              <div className="main__item">
                <img src={reviews} alt="иконка" className="main__icon"></img>
                <p className="main__text">{t("Main5")}</p>
              </div>
            </div>
            <div className="main__container_inner">
              <div className="main__item">
                <img src={automation} alt="иконка" className="main__icon"></img>
                <p className="main__text">{t("Main6")}</p>
              </div>
              <div className="main__item">
                <img src={qrcode} alt="иконка" className="main__icon"></img>
                <p className="main__text main__text-long">{t("Main7")}</p>
              </div>
              <div className="main__item">
                <img src={analitics} alt="иконка" className="main__icon"></img>
                <p className="main__text">{t("Main8")}</p>
              </div>
              <div className="main__item">
                <img src={clients} alt="иконка" className="main__icon"></img>
                <p className="main__text main__text-long">{t("Main9")}</p>
              </div>
            </div>
            <div className="main__container_inner">
              <div className="main__item">
                {/* <img src={ } alt="иконка" className="main__icon"></img> */}
                <p className="main__text">{t("Main6")}</p>
              </div>
              <div className="main__item">
                {/* <img src={ } alt="иконка" className="main__icon"></img> */}
                <p className="main__text main__text-long">{t("Main7")}</p>
              </div>
              <div className="main__item">
                {/* <img src={ } alt="иконка" className="main__icon"></img> */}
                <p className="main__text">{t("Main8")}</p>
              </div>
              <div className="main__item">
                {/* <img src={ } alt="иконка" className="main__icon"></img> */}
                <p className="main__text main__text-long">{t("Main9")}</p>
              </div>
            </div>
          </div>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="main__button">
            {t("Main10")}
          </Link>
        </div>
      </div>
    </section>

  );
}

export default Main;
