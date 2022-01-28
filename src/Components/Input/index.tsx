import React from "react";
import style from "./Input.module.scss";

type InputPropsType = {
  setData: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  type?: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { setData, placeholder, type } = props;
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div className={style.form__input}>
      <input onChange={changeData} type={type} placeholder={placeholder} />
    </div>
  );
};
export default Input;
