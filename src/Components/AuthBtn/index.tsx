import React from "react";
import "./index.css";

const AuthBtn: React.FC = () => {
  return (
    <div className="header-sign">
      <p>Вход</p>
      <button type="button">Регистрация</button>
    </div>
  );
};

export default AuthBtn;
