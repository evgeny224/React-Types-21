import React from "react";
import "./index.css";

type ButtonPropsType = {
  submitData: any;
};

const Button: React.FC<ButtonPropsType> = (props) => {
  const { submitData } = props;

  const addData = () => {
    submitData();
  };
  return (
    <div className="component__btn">
      <button type="button" onClick={addData}>
        Отправить
      </button>
    </div>
  );
};

export default Button;
// React.Dispatch<React.SetStateAction<string>>;
