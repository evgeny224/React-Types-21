import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import { UserAuthActionCreator } from "../../Store/AuthPage/actions";
import style from "./RegistrationPage.module.scss";

const RegistrationPage: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validator, setValidator] = useState(false);
  const dispatch = useDispatch();
  const navagate = useNavigate();
  const checkRegistration = () => {
    if (login && password) {
      dispatch(UserAuthActionCreator({ login, password }));
      navagate("/profile");
    } else {
      setValidator(true);
    }
  };
  return (
    <div className={style.reg}>
      <div>
        <h1>Регистрация</h1>
      </div>
      <div className={style.reg__input}>
        <h2>Введите логин</h2>
        <Input setData={setLogin} placeholder={login} />
      </div>
      <div className={style.reg__input}>
        <h2>Введите пароль</h2>
        <Input setData={setPassword} placeholder={password} />
      </div>
      {validator ? (
        <div className={style.auth__input_valit}>Заполните все поля</div>
      ) : null}
      <div>
        <SaveButton submitForm={checkRegistration} title="Войти" />
      </div>
    </div>
  );
};
export default RegistrationPage;
