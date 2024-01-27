import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Steps from "./components/Steps/Steps";
import Rates from "./components/Rates/Rates";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";
import Selection from "./components/Selection/Selection";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import StartNow from "./components/StartNow/StartNow";
import Support from "./components/Support/Support";

function App() {
  return (
    <div className="page">
      <Header />
      <Greeting />
      <Main />
      <Steps />
      <Support />
      <SliderComponent />
      <Rates />
      <StartNow />
      <Selection />
      <Footer />
    </div >
  );
}

export default App;
