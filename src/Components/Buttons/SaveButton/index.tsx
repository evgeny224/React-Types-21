import React from "react";
import style from "./Button.module.scss";

type ButtonPropsType = {
  submitForm: any;
};

const SaveButton: React.FC<ButtonPropsType> = (props) => {
  const { submitForm } = props;

  const addData = () => {
    submitForm();
  };
  return (
    <div className={style.component__btn}>
      <button type="button" onClick={addData}>
        Сохранить
      </button>
    </div>
  );
};

export default SaveButton;
