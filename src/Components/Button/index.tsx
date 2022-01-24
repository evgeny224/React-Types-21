import React from "react";
import "./index.css";

type ButtonPropsType = {
  submitForm: any;
};

const Button: React.FC<ButtonPropsType> = (props) => {
  const { submitForm } = props;

  const addData = () => {
    submitForm();
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
