import "./Greeting.css";
import React, { useEffect, useRef } from "react";


const Greeting = () => {
  const textRef = useRef(null);
  const words = ['ШУГАРИНГ', 'ПЕДИКЮР', 'РЕСНИЧКИ', 'МАНИКЮР', 'СТРИЖКА'];

  let currentWordIndex = 0;
  let currentCharIndex = 0;

  useEffect(() => {
    const textElement = textRef.current;

    function type() {
      if (currentCharIndex < words[currentWordIndex].length) {
        textElement.innerHTML += words[currentWordIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 140);
      } else {
        setTimeout(erase, 900);
      }
    }

    function erase() {
      if (currentCharIndex > 0) {
        textElement.innerHTML = words[currentWordIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 140);
      } else {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(type, 1500);
      }
    }

    type();

    return () => {
    };
  }, [words]);

  return (
    <section className="greeting">
      <div className="greeting__wrapper">
        <h1 className="greeting__header">
          Бесплатная платформа для <br /> мастеров красоты
        </h1>
        <div className="greeting__container">
          {/* <div className="greeting__image_first"></div> */}
          <div className="greeting__image_second"></div>
          <div className="greeting__text-container">
            <p className="greeting__text">Ваши клиенты записываются к вам на <br></br><span ref={textRef} className="text"></span> <br></br> пока вы занимаетесь своими
              делами</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
