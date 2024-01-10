import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Rates from './components/Rates/Rates';
import Footer from './components/Footer/Footer';



function App() {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <div className="App">
      <Header />
      <Main />
      <AboutUs />
      <Rates />
      <Footer />
    </div>
  );
}

export default App;
