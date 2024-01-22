import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Steps from "./components/Steps/Steps";
import Rates from "./components/Rates/Rates";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";
import Options from "./components/Options/Options";
import Selection from "./components/Selection/Selection";

function App() {



  return (
    <div className="page">
      <Header />
      <Greeting />
      <Main />
      <Steps />
      <Rates />
      <Options />
      <Selection />
      <Footer />
    </div >
  );
}

export default App;
