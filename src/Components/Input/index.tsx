import React from "react";
import "./index.css";

type InputPropsType = {
  setData: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { setData } = props;
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div>
      <input onChange={changeData} />
    </div>
  );
};
export default Input;
