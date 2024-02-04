import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import smartphone from '../../images/SmartphonePNG.png'
import hourglass from '../../images/HourglassPNG.png'
import "./StartNow.css";

const StartNow = () => {
  const { t } = useTranslation();

  return (
    <section id="startnow" className="startnow">
      <div className="startnow__wrapper">
        <div className="startnow__block">
          <div className="startnow__block-inner"></div>
          <h2 className="startnow__header">{t("Startnow1")}</h2>
          <p className="startnow__paragraph">{t("Startnow2")}</p>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="startnow__button">
            {t("Main10")}
          </Link>
          <img className="startnow__image_smartphone" src={smartphone} alt={("Smartphone")}></img>
          <img className="startnow__image_hourglass" src={hourglass} alt={t("Hourglass")}></img>

        </div>

      </div>
    </section>);
}

export default StartNow;