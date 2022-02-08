import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import mask from "../../Assets/Mask Group.png";
import style from "./ProfileEditingPage.module.scss";
import LoadButton from "../../Components/Buttons/LoadButton";
import { getOneUserData } from "../../Store/ProfileEditingPage/selectors";
import { fetchOneUserActionCreator } from "../../Store/ProfileEditingPage/actions";

const ProfileEditingPage: React.FC = () => {
  const userData = useSelector(getOneUserData);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [companyName, setCompany] = useState(userData.company.name);
  const [city, setCity] = useState(userData.address.city);

  const history = useNavigate();
  const dispatch = useDispatch();

  const submitForm = () => {
    history("/profile");
    dispatch(
      fetchOneUserActionCreator({
        username,
        email,
        name,
        phone,
        company: {
          name: companyName,
        },
        address: {
          city,
        },
      })
    );
  };

  return (
    <div className={style.profile}>
      <div className={style.profile__input}>
        <div className={style.profile__input__title}>
          <p>Основная информация</p>
        </div>
        <div className={style.profile__input__first_row}>
          <div>
            <p>ПОЗЫВНОЙ</p>
            <Input setData={setUsername} placeholder={userData.username} />
          </div>
          <div>
            <p>E-MAIL</p>
            <Input setData={setEmail} placeholder={userData.email} />
          </div>
        </div>
        <div className={style.profile__input__first_row}>
          <div>
            <p>ИМЯ</p>
            <Input setData={setName} placeholder={userData.name} />
          </div>
          <div>
            <p>НОМЕР ТЕЛЕФОНА</p>
            <Input setData={setPhone} placeholder={userData.phone} />
          </div>
        </div>
        <div className={style.profile__input__first_row}>
          <div>
            <p>МЕСТО РАБОТЫ</p>
            <Input setData={setCompany} placeholder={userData.company.name} />
          </div>
          <div>
            <p>ГОРОД</p>
            <Input setData={setCity} placeholder={userData.address.city} />
          </div>
        </div>
        <div>
          <SaveButton submitForm={submitForm} title="Сохранить" />
        </div>
      </div>
      <div className={style.profile__load__photo}>
        <div>
          <img src={mask} alt="mask" />
        </div>
        <div>
          <p>
            Максимальный размер
            <br /> 300х300, вес менее 1 Мб
          </p>
          <div>
            <LoadButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileEditingPage;
