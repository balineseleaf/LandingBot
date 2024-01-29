import { Link } from "react-router-dom";
import supportImage from '../../images/nailsSVG.svg'
import "./Support.css";

const Support = () => {
  return (
    <section className="support">
      <div className="support__wrapper">
        <div className="support__block">
          <h2 className="support__header">Обратитесь к нам в социальных сетях</h2>
          <p className="support__text">Быстро. Легко. Удобно.</p>
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
          <img src={supportImage} alt="картинка саппорт" className="support__image" />
        </div>
        {/* <img src={support} alt="саппорт" className="support__image"></img> */}
      </div>

    </section>);
}

export default Support;