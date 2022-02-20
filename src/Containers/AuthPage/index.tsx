import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import { getUserAuthActionCreator } from "../../Store/AuthPage/actions";
import { getAuthUsersData } from "../../Store/AuthPage/selectors";
import { fetchOneUserActionCreator } from "../../Store/ProfileEditingPage/actions";
import {
  getUserPhotoActionCreator,
  onePhotoUserActionCreator,
} from "../../Store/UserPhoto/actions";
import { getPhotoUsersData } from "../../Store/UserPhoto/selectors";
import style from "./AuthPage.module.scss";

const AuthPage: React.FC = () => {
  useEffect(() => {
    dispatch(getUserAuthActionCreator());
    dispatch(getUserPhotoActionCreator());
  }, []);
  const [name, setName] = useState("Имя");
  const [email, setEmail] = useState("Электронная Почта");
  const [validator, setValidator] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(getAuthUsersData);
  const userPhotoData = useSelector(getPhotoUsersData);
  console.log(userPhotoData);
  let userId: number | undefined = 0;

  console.log(userData);
  const checkData = () => {
    userData.forEach((element) => {
      if (element.name === name && element.email === email) {
        dispatch(fetchOneUserActionCreator(element));
        userId = element.id;
        navigate("/profile");
      }
    });
    setValidator(true);
    userPhotoData.forEach((element) => {
      if (element.id === userId) {
        dispatch(onePhotoUserActionCreator(element));
      }
    });
  };

  return (
    <div className={style.auth}>
      <div className={style.auth__title}>
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
