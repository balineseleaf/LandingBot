import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./components/Steps/Steps";
import Benefits from "./components/Benefits/Benefits";
import Rates from "./components/Rates/Rates";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Animation/Animation";
import Greeting from "./components/Greeting/Greeting";
import Options from "./components/Options/Options";



function App() {
  return (
    <div className="app">
      <Header />
      <Greeting />
      <Main />
      <AboutUs />
      <Rates />
      {/* <Benefits /> */}
      <Options />
      {/* <Animation /> */}
      <Footer />
    </div>
  );
}

export default App;
