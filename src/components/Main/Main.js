import React from "react";
import './Main.css';
import iphone from '../../images/iphone.svg';

const Main = () => {
  return (
    <div className="main__wrapper">
      <h1 className="main__header">Okoshko</h1>
      <img className="main__image" src={iphone}></img>
    </div>);
}

export default Main;