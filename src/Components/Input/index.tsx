import React from "react";
import "./index.css";

type InputPropsType = {
  setData: any;
  type?: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { setData, type } = props;
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div className="form__input">
      <input onChange={changeData} type={type} />
    </div>
  );
};
export default Input;
