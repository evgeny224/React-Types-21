import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="product__card__header">
      <p>
        <a href="#main">Главная</a>
      </p>
      <p>
        <a href="#list">Каталог</a>
      </p>
      <p>
        <a href="clocks">Часы наручные</a>
      </p>
      <p>
        <a href="wristwatch">Аксесуары</a>
      </p>
      <p>
        <a href="iconic">Бренды</a>
      </p>
    </header>
  );
};

export default Header;
