import './AboutUs.css'
import React from "react";
import iphone from '../../images/iphone.svg';

const AboutUs = () => {

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setScrolled(scrollY > 180); // Измените значение, чтобы задать порог прокрутки
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="aboutus__wrapper">
      <div className="aboutus__header">О Нас</div>
      <img className="aboutus__image" src={iphone}></img>
    </div>);
}

export default AboutUs;