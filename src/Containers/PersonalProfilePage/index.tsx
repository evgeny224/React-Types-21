import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./PersonalAreaPage.module.scss";
import arrow from "../../Assets/GroupArrow 3117656.png";
import mask from "../../Assets/Mask Group.png";
import SaveButton from "../../Components/Buttons/SaveButton";
import { getOneUserData } from "../../Store/ProfileEditingPage/selectors";
import { getPhotoUserData } from "../../Store/UserPhoto/selectors";
import { nonePhotoUserActionCreator } from "../../Store/UserPhoto/actions";

const PersonalProfilePage: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const outProfile = () => {
    history("/");
    dispatch(nonePhotoUserActionCreator({}));
  };
  const userData = useSelector(getOneUserData);
  const userPhoto = useSelector(getPhotoUserData);

  console.log(userData);

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
              <div>{userData.username ? userData.username : ""}</div>
            </div>
            <div>
              <p>E-MAIL</p>
              <div>{userData.email}</div>
            </div>
          </div>
          <div className={style.content__profile__input__first_row}>
            <div className={style.content__profile__input__first_row_box}>
              <p>ИМЯ</p>
              <div>{userData.name}</div>
            </div>
            <div className={style.content__profile__input__first_row_box}>
              <p>НОМЕР ТЕЛЕФОНА</p>
              <div>{userData.phone ? userData.phone : ""}</div>
            </div>
          </div>
          <div className={style.content__profile__input__first_row}>
            <div className={style.content__profile__input__first_row_box}>
              <p>МЕСТО РАБОТЫ</p>
              <div>{userData.company ? userData.company.name : ""}</div>
            </div>
            <div className={style.content__profile__input__first_row_box}>
              <p>ГОРОД</p>
              <div>{userData.address ? userData.address.city : ""}</div>
            </div>
          </div>
        </div>
        <div className={style.content__profile__load__photo}>
          <div className={style.content__profile__load__photo__mask}>
            <img
              src={userPhoto.avatar_url ? userPhoto.avatar_url : mask}
              alt="mask"
            />
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
