import "./Greeting.css";
import React, { useEffect, useRef } from "react";
import checkIcon from '../../images/checkIcon5.png';
import { useTranslation } from "react-i18next";


const Greeting = () => {
  // const textRef = useRef(null);
  // const words = ['ШУГАРИНГ', 'ПЕДИКЮР', 'РЕСНИЧКИ', 'МАНИКЮР', 'СТРИЖКУ'];

  // let currentWordIndex = 0;
  // let currentCharIndex = 0;

  // useEffect(() => {
  //   const textElement = textRef.current;

  //   function type() {
  //     if (currentCharIndex < words[currentWordIndex].length) {
  //       textElement.innerHTML += words[currentWordIndex].charAt(currentCharIndex);
  //       currentCharIndex++;
  //       setTimeout(type, 140);
  //     } else {
  //       setTimeout(erase, 900);
  //     }
  //   }

  //   function erase() {
  //     if (currentCharIndex > 0) {
  //       textElement.innerHTML = words[currentWordIndex].substring(0, currentCharIndex - 1);
  //       currentCharIndex--;
  //       setTimeout(erase, 140);
  //     } else {
  //       currentWordIndex = (currentWordIndex + 1) % words.length;
  //       setTimeout(type, 1500);
  //     }
  //   }

  //   type();

  //   return () => {
  //   };
  // }, [words]);

  const { t } = useTranslation();

  return (
    <section className="greeting">
      <div className="greeting__wrapper">
        <h1 className="greeting__header">
          {t("Greeting0")} <br />{t("Greeting1")}<br /> {t("Greeting2")}
        </h1>
        <div className="greeting__container">
          <div className="greeting__image_second"></div>
          <img className="greeting__image_third" src={checkIcon} alt="галочка" />
          <div className="greeting__text-container">
            {/* <span ref={textRef} className="text"></span> */}
            <p className="greeting__text">{t("Greeting3")} <br /> МАНИКЮР <br /> {t("Greeting4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
