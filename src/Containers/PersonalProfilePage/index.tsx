import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./PersonalAreaPage.module.scss";
import arrow from "../../Assets/GroupArrow 3117656.png";
import mask from "../../Assets/Mask Group.png";
import SaveButton from "../../Components/Buttons/SaveButton";

type PersonalProfilePagePropsTypes = {
  userData: {
    callSign: string;
    email: string;
    name: string;
    birthDate: string;
    family: string;
    city: string;
  };
};

const PersonalProfilePage: React.FC<PersonalProfilePagePropsTypes> = (
  props
) => {
  const history = useNavigate();
  const outProfile = () => {
    history("/");
  };
  const {
    userData: { callSign, email, name, birthDate, family, city },
  } = props;
  return (
    <div className={style.content}>
      <div className={style.content__profile}>
        <div className={style.content__profile__input}>
          <NavLink to="/editprofile" className={style.content__title}>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
            <div>
              <div className={style.content__title__profile}>
                Редактирование профиля
              </div>
            </div>
          </NavLink>
          <div className={style.content__profile__input__title}>
            <p>Основная информация</p>
          </div>
          <div className={style.content__profile__input__first_row}>
            <div className={style.content__profile__input__first_row_box}>
              <p>ПОЗЫВНОЙ</p>
              <div>{callSign}</div>
            </div>
            <div>
              <p>E-MAIL</p>
              <div>{email}</div>
            </div>
          </div>
          <div className={style.content__profile__input__first_row}>
            <div className={style.content__profile__input__first_row_box}>
              <p>ИМЯ</p>
              <div>{name}</div>
            </div>
            <div className={style.content__profile__input__first_row_box}>
              <p>ДАТА РОЖДЕНИЯ</p>
              <div>{birthDate}</div>
            </div>
          </div>
          <div className={style.content__profile__input__first_row}>
            <div className={style.content__profile__input__first_row_box}>
              <p>ФАМИЛИЯ</p>
              <div>{family}</div>
            </div>
            <div className={style.content__profile__input__first_row_box}>
              <p>ГОРОД</p>
              <div>{city}</div>
            </div>
          </div>
        </div>
        <div className={style.content__profile__load__photo}>
          <div>
            <img src={mask} alt="mask" />
          </div>
          <div>
            <p>Фото</p>
          </div>
          <div className={style.content__profile__btn}>
            <SaveButton submitForm={outProfile} title="Выйти" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalProfilePage;
