import React, { useState } from "react";
import "./index.css";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Content: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = () => {
    if (password !== repeatPassword) {
      setFlag(true);
    } else if (
      name === "" ||
      surname === "" ||
      login === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setError(true);
    } else {
      setFlag(false);
      setError(false);
      console.log({
        Имя: name,
        Фамилия: surname,
        Логин: login,
        Пароль: password,
      });
    }
  };

  return (
    <div className="content">
      <div className="content__form">
        <div className="content__form__list">
          <div className="content__form__input name">
            <p>Имя</p>
            <Input setData={setName} />
          </div>
          <div className="content__form__input surname">
            <p>Фамилия</p>
            <Input setData={setSurname} />
          </div>
          <div className="content__form__input login">
            <p>Логин</p>
            <Input setData={setLogin} />
          </div>
          <div className="content__form__input password">
            <p>Введите пароль</p>
            <Input setData={setPassword} type="password" />
          </div>
          <div className="content__form__input repeatpassword">
            <p>Повторите пароль</p>
            <Input setData={setRepeatPassword} type="password" />
          </div>
          {flag ? <div className="notsamepass">Пароли не совпадают</div> : null}
          {error ? <div className="notsamepass">Заполните все поля</div> : null}
        </div>
        <div>
          <Button submitData={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default Content;
