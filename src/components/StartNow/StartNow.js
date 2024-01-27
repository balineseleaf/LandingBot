import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./StartNow.css";

const StartNow = () => {
  const { t } = useTranslation();
  return (
    <section className="startnow">
      <div className="startnow__wrapper">
        <div className="startnow__block">
          <h2 className="startnow__header">Начните работать с клиентами уже сейчас</h2>
          <p className="startbow__paragraph">Минимизируйте энергозатраты и потерю времени, используя наш агрегатор</p>
          <Link to="https://telegra.ph/Telegram-bot-dlya-mastera-beauty-sfery-10-23" className="startnow__button">
            {t("Main10")}
          </Link>
          <div className="startnow__image"></div>

        </div>

      </div>
    </section>);
}

export default StartNow;