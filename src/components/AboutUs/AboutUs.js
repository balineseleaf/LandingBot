import './AboutUs.css'
import React from "react";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutus">
      <div className="aboutus__wrapper">
        <div className="aboutus__header">{t("AboutUs")}</div>
        {/* <img className="aboutus__image" src={iphone}></img> */}
      </div>
    </div>
  );
}

export default AboutUs;