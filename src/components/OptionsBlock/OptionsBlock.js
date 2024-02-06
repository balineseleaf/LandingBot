import "./OptionsBlock.css";
import { useTranslation } from "react-i18next";
import growth from '../../images/redArrow.svg';
import clients from '../../images/bluePeople.svg';
import analytics from '../../images/chartPNG.png';
import laptop from '../../images/LaptopPNG.png';
import notification from '../../images/mailmonitorPNG.png';
import planet from '../../images/PlanetPNG.png';
import calendar from '../../images/calendarPNG.png';
import calc from '../../images/calcPNG.png';
import safe from '../../images/SafePNG.png';
import cup from '../../images/cupPNG.png';
import notebook from '../../images/notebookpenPNG.png';
import stats from '../../images/statsPNG.png';

const OptionsBlock = () => {
  const { t } = useTranslation();

  return (
    <section id="options" className="options">
      <div className="options__wrapper">
        <h1 className="options__header"><span className="options__letter"><span className="options__first-letter">O</span>koshko</span>{t("Options1")}</h1>
        <h3 className="options__text">{t("Options14")}</h3>
        <div className="options__container">
          <div className="options__block3 first-block">
            <p className="options__paragraph">{t("Options2")}
            </p>
            <p className="options__paragraph-little">Занимайтесь своими делами и получайте заказы</p>
            <img className="options__image options__image-clients" src={clients} alt={t("Clients")}></img>
            <img className="options__image options__image-growths" src={growth} alt={t("Growth")}></img>
          </div>
          <div className="options__block3 second-block">
            <p className="options__paragraph">{t("Options3")}
            </p>
            <p className="options__paragraph-little">Получайте оповещения о новых записях и клиентах</p>
            <img className="options__image options__image-notification" src={notification} alt={t("Notif")}></img>
            <img className="options__image options__image-notebook" src={notebook} alt={t("Notebook")}></img>
          </div>
          <div className="options__block3 third-block">
            <p className="options__paragraph options__paragraph-calendar">{t("Options9")}
            </p>
            <p className="options__paragraph-little">Эффективно управляйте своим временем и ресурсами</p>
            <img className="options__image options__image-calendar" src={calendar} alt={t("Calendar")}></img>
            <img className="options__image options__image-planet" src={planet} alt={t("Planet")}></img>
          </div>
          <div className="options__block2 fourth-block">
            <p className="options__paragraph">{t("Options5")}
            </p>
            <p className="options__paragraph-little">Следите за своими показателями и оценивайте их</p>
            <img className="options__image options__image-laptop" src={laptop} alt={t("Laptop")}></img>
            <img className="options__image options__image-analytics" src={analytics} alt={t("Analytics")}></img>
            <img className="options__image options__image-stats" src={stats} alt={t("Stats")}></img>
          </div>
          <div className="options__block2 fifth-block">
            <p className="options__paragraph options__paragraph-safe">{t("Options6")}
            </p>
            <p className="options__paragraph-little">Смело развивайте собственный бизнес</p>
            <img className="options__image options__image-safe" src={safe} alt={t("Safe")}></img>
            <img className="options__image options__image-calc" src={calc} alt={t("Calc")}></img>
            <img className="options__image options__image-award" src={cup} alt={t("Cup")}></img>
          </div>
        </div>
      </div>
    </section>);
}

export default OptionsBlock;