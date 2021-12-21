import React from "react";
import "./index.css";
import logo from "../../Assets/311-3113352_world-wide-web-logo-png-website-image-without.png";

const Navbar: React.FC = () => {
  return (
    <div className="header__navbar">
      <p className="header__navbar__logo">
        <a href="#main">
          <img src={logo} alt="logo" />
        </a>
      </p>
      <p>
        <a href="#list">
          Электронная <br /> библиотека
        </a>
      </p>
      <p>
        <a href="clocks">О нас</a>
      </p>
      <p>
        <a href="wristwatch">Материалы</a>
      </p>
      <p>
        <a href="iconic">Иследования</a>
      </p>
    </div>
  );
};

export default Navbar;
