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

  const [validation, setValidation] = useState({
    notEqualPasswords: false,
    emptyString: false,
  });

  const userData = {
    Имя: name,
    Фамилия: surname,
    Логин: login,
    Пароль: password,
  };

  const submitForm = () => {
    if (password !== repeatPassword) {
      setValidation({ ...validation, notEqualPasswords: true });
    } else if (
      name === "" ||
      surname === "" ||
      login === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setValidation({
        ...validation,
        emptyString: true,
        notEqualPasswords: false,
      });
    } else {
      setValidation({
        ...validation,
        emptyString: false,
      });
      console.log(userData);
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
          {validation.notEqualPasswords ? (
            <div className="notsamepass">Пароли не совпадают</div>
          ) : null}
          {validation.emptyString ? (
            <div className="notsamepass">Заполните все поля</div>
          ) : null}
        </div>
        <div>
          <Button submitForm={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default Content;
