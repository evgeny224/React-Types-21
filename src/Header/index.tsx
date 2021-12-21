import React from "react";
import "./index.css";
import Navbar from "../Components/Navbar";
import AuthBtn from "../Components/AuthBtn";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <AuthBtn />
    </header>
  );
};

export default Header;
