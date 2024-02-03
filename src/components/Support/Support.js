import { Link } from "react-router-dom";
import social from '../../images/SquadsPNG.png';
import letters from '../../images/LetterPNG.png';
import { useTranslation } from "react-i18next";
import "./Support.css";

const Support = () => {
  const { t } = useTranslation();
  return (
    <section id="support" className="support">
      <div className="support__wrapper">
        <div className="support__block">
          <h2 className="support__header">{t("Support1")}</h2>
          <p className="support__text">{t("Support2")}</p>
          <div className="support__inner-block">
            <div className="support__left-container">
              <Link to="" className="support__button support__button_tg">
              </Link>
              <Link to="" className="support__button support__button_facebook">
              </Link>
            </div>
            <div className="support__right-container">
              <Link to="" className="support__button support__button_mail">
              </Link>
              <Link to="" className="support__button support__button_vk">
              </Link>
            </div>
          </div>
          <img src={social} alt="squads" className="support__image_squads" />
          <img src={letters} alt="letters" className="support__image_letter" />
        </div>
      </div>

    </section>);
}

export default Support;