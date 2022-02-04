import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import { getAuthUserData } from "../../Store/AuthPage/selectors";
import style from "./AuthPage.module.scss";

const AuthPage: React.FC = () => {
  const [login, setLogin] = useState("Логин");
  const [password, setPassword] = useState("Пароль");
  const [validator, setValidator] = useState(false);
  const history = useNavigate();
  const AuthUserData = useSelector(getAuthUserData);
  console.log(AuthUserData);
  const checkData = () => {
    if (
      login === AuthUserData.auth.login &&
      password === AuthUserData.auth.password
    ) {
      history("/profile");
    }
    setValidator(true);
  };
  return (
    <div className={style.auth}>
      <div>
        <h1>Авторизация</h1>
      </div>
      <div className={style.auth__input}>
        <h2>Логин</h2>
        <Input setData={setLogin} placeholder={login} />
      </div>
      <div className={style.auth__input}>
        <h2>Пароль</h2>
        <Input setData={setPassword} placeholder={password} />
      </div>
      {validator ? (
        <div className={style.auth__input_valit}>
          Неправильный Логин или Пароль
        </div>
      ) : null}
      <div>
        <SaveButton submitForm={checkData} title="Войти" />
      </div>
    </div>
  );
};
export default AuthPage;
