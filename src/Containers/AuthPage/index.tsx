import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import {
  fetchOneUserActionCreator,
  fetchUserDataActionCreator,
} from "../../Store/ProfileEditingPage/actions";
import { getUserData } from "../../Store/ProfileEditingPage/selectors";
import style from "./AuthPage.module.scss";

const AuthPage: React.FC = () => {
  useEffect(() => {
    dispatch(fetchUserDataActionCreator());
  }, []);
  const [name, setName] = useState("Имя");
  const [email, setEmail] = useState("Электронная Почта");
  const [validator, setValidator] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(getUserData);

  console.log(userData);
  const checkData = () => {
    userData.forEach((element) => {
      if (element.name === name && element.email === email) {
        dispatch(fetchOneUserActionCreator(element));
        navigate("/profile");
      }
    });
    setValidator(true);
  };
  return (
    <div className={style.auth}>
      <div>
        <h1>Авторизация</h1>
      </div>
      <div className={style.auth__input}>
        <Input setData={setName} placeholder={name} />
      </div>
      <div className={style.auth__input}>
        <Input setData={setEmail} placeholder={email} />
      </div>
      {validator ? (
        <div className={style.auth__input_valit}>
          Неправильное Имя или Почта
        </div>
      ) : null}
      <div>
        <SaveButton submitForm={checkData} title="Войти" />
      </div>
    </div>
  );
};
export default AuthPage;
