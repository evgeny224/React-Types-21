import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.scss";
import logo from "../../../Assets/Group 3117412white.png";
import line from "../../../Assets/Line 3.png";
import whatsapp from "../../../Assets/WhatsApp.png";
import vk from "../../../Assets/VK.png";
import facebook from "../../../Assets/Facebook.png";
import youtube from "../../../Assets/Youtube.png";
import telegram from "../../../Assets/Telegram.png";
import longLine from "../../../Assets/Line__ong 3.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <div className={style.footer__nav}>
          <div className={style.footer__nav__logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={style.footer__nav__list}>
            <li>
              <NavLink to="/services">Сервисы</NavLink>
            </li>
            <li>
              <NavLink to="/events">Мероприятия</NavLink>
            </li>
            <li>
              <NavLink to="/knowledgebase">База знаний</NavLink>
            </li>
            <li>
              <NavLink to="/rules">Правила</NavLink>
            </li>
            <li>
              <NavLink to="/payment">Оплата</NavLink>
            </li>
          </ul>
          <ul className={style.footer__nav__list}>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/news">Новости</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Блог</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/clubcomposition">Состав клуба</NavLink>
            </li>
          </ul>
          <ul className={style.footer__nav__list}>
            <li>
              <NavLink to="/reviews">Отзывы</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/invitation">Как попасть в клуб</NavLink>
            </li>
            <li>
              <NavLink to="/pointsystem">Система баллов</NavLink>
            </li>
          </ul>
          <div className={style.footer__social}>
            <p>8 (800) 300–25–25</p>
            <p>privatka.club@gmail.com</p>
            <div>
              <img src={line} alt="line" />
            </div>
            <div className={style.footer__social__icons}>
              <div>
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <div>
                <img src={vk} alt="vk" />
              </div>
              <div>
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={youtube} alt="youtube" />
              </div>
              <div>
                <img src={telegram} alt="telegram" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={longLine} alt="long_line" />
        </div>
        <div className={style.footer__just}>
          <div className={style.footer__just__info}>
            <p>© Приватка Клуб, 2021</p>
            <p>Все права защищены</p>
            <p>Политика конфенденциальности</p>
          </div>
          <div className={style.footer__just__author}>
            <p>Made by Flat12</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
