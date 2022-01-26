import React from "react";
import { NavLink } from "react-router-dom";
import style from "./HeaderInfo.module.scss";
import logo from "../../../../Assets/Group 3117412.png";
import icon from "../../../../Assets/Frame 3116937.png";

const HeaderInfo: React.FC = () => {
  return (
    <nav className={style.header__info}>
      <ul className={style.header__info__list}>
        <li className={style.header__info__list__logo}>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <NavLink to="/events">МЕРОПРИЯТИЯ</NavLink>
        </li>
        <li>
          <NavLink to="/services">СЕРВИСЫ</NavLink>
        </li>
        <li>
          <NavLink to="/about">О КЛУБЕ</NavLink>
        </li>
        <li>
          <NavLink to="/clubcomposition">СОСТАВ КЛУБА</NavLink>
        </li>
        <li>
          <NavLink to="/invitation">КАК ПОПАСТЬ В КЛУБ</NavLink>
        </li>
      </ul>
      <div className={style.icons}>
        <img src={icon} alt="icon" />
      </div>
    </nav>
  );
};

export default HeaderInfo;
