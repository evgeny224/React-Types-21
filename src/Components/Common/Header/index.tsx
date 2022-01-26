import React from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderNavbar from "./HeaderNavbar";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <HeaderNavbar />
      <HeaderInfo />
    </header>
  );
};

export default Header;
