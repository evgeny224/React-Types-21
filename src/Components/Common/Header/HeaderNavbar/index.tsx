import React from "react";
import { NavLink } from "react-router-dom";
import style from "./HeaderNavbar.module.scss";
import arrow from "../../../../Assets/Rectangle 7324321 (Stroke).png";

const HeaderNavbar: React.FC = () => {
  return (
    <nav className={style.header__nav}>
      <ul className={style.header__nav__list}>
        <li>
          <NavLink to="/news">НОВОСТИ</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">ОТЗЫВЫ</NavLink>
        </li>
        <li>
          <NavLink to="/blog">БЛОГ</NavLink>
        </li>
        <li>
          <NavLink to="/knowledgebase">БАЗА ЗНАНИЙ</NavLink>
        </li>
        <li>
          <NavLink to="/rules">ПРАВИЛА</NavLink>
        </li>
        <li>
          <NavLink to="/payment">ОПЛАТА</NavLink>
        </li>
        <li>
          <NavLink to="/pointsystem">СИСТЕМА БАЛЛОВ</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">КОНТАКТЫ</NavLink>
        </li>
      </ul>
      <ul className={style.header__nav__social}>
        <li>
          <NavLink to="/vkontakt">VKONTAKTE</NavLink>
          <img src={arrow} alt="arrow" />
        </li>
        <li>
          <NavLink to="/instagram">INSTAGRAM</NavLink>
          <img src={arrow} alt="arrow" />
        </li>
        <li className={style.lastitem}>
          <NavLink to="/youtube">YOUTUBE</NavLink>
          <img src={arrow} alt="arrow" />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
