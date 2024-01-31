import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import smartphone from '../../images/Smartphone.svg'
import hourglass from '../../images/Hourglass.svg'
import "./StartNow.css";

const StartNow = () => {
  const { t } = useTranslation();
  // const startnowRef = useRef(null);
  return (
    <section id="startnow" className="startnow">
      <div className="startnow__wrapper">
        <div className="startnow__block">
          <div className="stranow__block-inner"></div>
          <h2 className="startnow__header">{t("Startnow1")}</h2>
          <p className="startbow__paragraph">{t("Startnow2")}</p>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="startnow__button">
            {t("Main10")}
          </Link>
          <img className="startnow__image_smartphone" src={smartphone} alt="smartphone"></img>
          <img className="startnow__image_hourglass" src={hourglass} alt="hourglass"></img>

        </div>

      </div>
    </section>);
}

export default StartNow;