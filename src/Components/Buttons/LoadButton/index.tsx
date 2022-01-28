import React from "react";
import style from "./LoadButton.module.scss";

const LoadButton: React.FC = () => {
  return (
    <div className={style.component__btn}>
      <button type="submit">Загрузить</button>
    </div>
  );
};

export default LoadButton;
