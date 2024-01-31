import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main";
import Steps from "./components/Steps/Steps";
import Rates from "./components/Rates/Rates";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";
import Selection from "./components/Selection/Selection";
import OptionsBlock from "./components/OptionsBlock/OptionsBlock";
import StartNow from "./components/StartNow/StartNow";
import Support from "./components/Support/Support";

function App() {
  return (
    <div className="page">
      {/* <Routes>
        <Route path="/main"
          element={<Main />}
        />
        <Route path="/steps"
          element={<Steps />}
        />
        <Route path="/support"
          element={<Support />}
        />
      </Routes> */}
      <Header />
      <Greeting />
      <Main />
      <Steps />
      <Support />
      <OptionsBlock />
      <Rates />
      <StartNow />
      <Selection />
      <Footer />
    </div >
  );
}

export default App;
