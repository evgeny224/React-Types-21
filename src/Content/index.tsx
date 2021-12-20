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

  const submitForm = () => {
    if (password !== repeatPassword) {
      setFlag(true);
    } else {
      setFlag(false);
      console.log({
        Имя: name,
        Фамилия: surname,
        Логин: login,
        Пароль: password,
      });
    }
  };

  return (
    <div>
      <div>
        <Input setData={setName} />
        <Input setData={setSurname} />
        <Input setData={setLogin} />
        <Input setData={setPassword} />
        {flag ? <div>Пароли не совпадают</div> : null}
        <Input setData={setRepeatPassword} />
      </div>
      <div>
        <Button submitData={submitForm} />
      </div>
    </div>
  );
};

export default Content;
