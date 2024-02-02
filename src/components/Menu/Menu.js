import './Menu.css';
import React from 'react';
import { Link } from "react-scroll";

const Menu = ({ active, setActive }) => {
  return (
    <div className={active ? 'menu menu__active' : 'menu'}>
      <button className="menu__button" onClick={() => setActive(false)}>
      </button>
      <div className="menu__content">
        {/* <div className="menu-header">Окошко</div> */}
        <div className="menu__list">
          <Link className="menu__item" to="main" spy={true} smooth={true} offset={-100} duration={500}>Наш функционал</Link>
          <Link className="menu__item" to="steps" spy={true} smooth={true} offset={-100} duration={500}>Шаги</Link>
          <Link className="menu__item" to="support" spy={true} smooth={true} offset={-100} duration={500}>Поддержка</Link>
          <Link className="menu__item" to="options" spy={true} smooth={true} offset={-100} duration={500}>Опции</Link>
          <Link className="menu__item" to="rates" spy={true} smooth={true} offset={-100} duration={500}>Тарифы</Link>
          <Link className="menu__item" to="selection" spy={true} smooth={true} offset={-100} duration={500}>Выбор</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu;