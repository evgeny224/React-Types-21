import React from "react";
import style from "./Button.module.scss";

type ButtonPropsType = {
  submitForm: () => void;
  title: string;
};

const SaveButton: React.FC<ButtonPropsType> = (props) => {
  const { submitForm, title } = props;

  const addData = () => {
    submitForm();
  };
  return (
    <div className={style.component__btn}>
      <button type="button" onClick={addData}>
        {title}
      </button>
    </div>
  );
};

export default SaveButton;
