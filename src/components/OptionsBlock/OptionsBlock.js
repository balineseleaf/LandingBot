import "./OptionsBlock.css";
import { useTranslation } from "react-i18next";
import logo from '../../images/logos.svg'

const OptionsBlock = () => {
  const { t } = useTranslation();

  return (
    <section id="options" className="options">
      <div className="options__wrapper">
        <h1 className="options__header"><span className="options__letter"><span className="options__first-letter">O</span>koshko</span>{t("Options1")}</h1>
        <div className="options__container">
          <div class="options__block3 first-block">
            <p className="options__paragraph">{t("Options2")}
            </p>
          </div>
          <div class="options__block3 second-block">
            <p className="options__paragraph">{t("Options3")}
            </p>
          </div>
          <div class="options__block3 third-block">
            <p className="options__paragraph">{t("Options9")}
            </p>
          </div>
          <div class="options__block2 fourth-block">
            <p className="options__paragraph">{t("Options5")}
            </p>
          </div>
          <div class="options__block2 fifth-block">
            <p className="options__paragraph">{t("Options6")}
            </p>
          </div>
        </div>
      </div>
    </section>);
}

export default OptionsBlock;