import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./components/Steps/Steps";
import Rates from "./components/Rates/Rates";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Animation/Animation";
import Greeting from "./components/Greeting/Greeting";
import Options from "./components/Options/Options";
import Selection from "./components/Selection/Selection";

function App() {
  return (
    <div className="app">
      <Header />
      <Greeting />
      <Main />
      <AboutUs />
      <Rates />
      <Options />
      {/* <Animation /> */}
      <Selection />
      <Footer />
    </div>
  );
}

export default App;
