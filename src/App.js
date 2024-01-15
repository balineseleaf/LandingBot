import React, { useState, useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/Steps';
import Benefits from './components/Benefits/Benefits';
import Rates from './components/Rates/Rates';
import Footer from './components/Footer/Footer';
import Animation from './components/Animation/Animation';
import iphone from './images/iphone.svg';
import Greeting from './components/Greeting/Greeting';



function App() {
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setScrolled(scrollY > 10); // Измените значение, чтобы задать порог прокрутки
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <div className="app">
      {/* <img className={`app__image ${scrolled ? 'scrolled' : ''}`} src={iphone} alt="iPhone" /> */}
      <Header />
      <Greeting />
      <Main />
      <AboutUs />
      <Rates />
      {/* <Benefits /> */}
      <Animation />
      <Footer />
    </div>
  );
}

export default App;
