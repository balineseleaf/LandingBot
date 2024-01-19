import "./Greeting.css";
import React, { useEffect, useState, useRef } from "react";
import checkIcon from '../../images/checkIcon5.png';
import { useTranslation } from "react-i18next";
import Typed from 'typed.js';

const Greeting = () => {
  const { t, i18n } = useTranslation();
  const elRu = useRef(null);
  const elEn = useRef(null);

  // const words = ['ПЕДИКЮР', 'РЕСНИЧКИ', 'МАНИКЮР', 'СТРИЖКУ'];

  // let currentWordIndex = 0;
  // let currentCharIndex = 0;

  // useEffect(() => {
  //   const textElement = textRef.current;

  //   function type() {
  //     if (currentCharIndex < words[currentWordIndex].length) {
  //       textElement.innerText += words[currentWordIndex].charAt(currentCharIndex);
  //       currentCharIndex++;
  //       setTimeout(type, 140);
  //     } else {
  //       setTimeout(erase, 900);
  //     }
  //   }

  //   function erase() {
  //     if (currentCharIndex > 0) {
  //       textElement.innerText = words[currentWordIndex].substring(0, currentCharIndex - 1);
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

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [`${t("GreetingArr1")}`, '2', '1', '3'],
  //     typeSpeed: 90,
  //     loop: true,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  useEffect(() => {
    // const typedRu = new Typed(elRu.current, {
    //   strings: ["МАНИКЮР", "ШУГАРИНГ", "ПЕДИКЮР", "СТРИЖКУ"],
    //   typeSpeed: 90,
    //   loop: true,
    // });

    // const typedEn = new Typed(elEn.current, {
    //   strings: ["MANICURE", "SUGARING", "PEDICURE", "HAIRCUT"],
    //   typeSpeed: 90,
    //   loop: true,
    // });

    const typedEn = new Typed(elEn.current, {
      strings: [`${t("GreetingArr1")}`, `${t("GreetingArr2")}`, `${t("GreetingArr3")}`, `${t("GreetingArr4")}`],
      typeSpeed: 90,
      loop: true,
    });

    return () => {
      // typedRu.destroy();
      typedEn.destroy();
    };

  }, []);

  // let greetingText;
  // switch (i18n.language) {
  //   case 'ru':
  //     greetingText = (
  //       <p id="ru" className="greeting__text">
  //         {t("Greeting3")} <br /><span ref={elRu} className="text"></span><br /> {t("Greeting4")}
  //       </p>
  //     );
  //     break;
  //   case 'en':
  //     greetingText = (
  //       <p id="en" className="greeting__text">
  //         {t("Greeting3")} <br /><span ref={elEn} className="text"></span><br /> {t("Greeting4")}
  //       </p>
  //     );
  //     break;
  //   default:
  //     greetingText = null;
  // }


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
            {/* {i18n.language === 'en' ? (
              <p id="ru" className="greeting__text">
                {t("Greeting3")} <br /><span ref={elRu} className="text"></span><br /> {t("Greeting4")}
              </p>
            ) : ( */}
            <p className="greeting__text">
              {t("Greeting3")} <br /><span ref={elEn} className="text"></span><br /> {t("Greeting4")}
            </p>
            {/* )} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
