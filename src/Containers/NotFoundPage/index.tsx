import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NotFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className={style.title}>
      <h1>Страница не найдена</h1>
      <NavLink to="/">
        <h2>На главную</h2>
      </NavLink>
    </div>
  );
};
export default NotFoundPage;
