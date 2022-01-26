import React, { useState } from "react";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import mask from "../../Assets/Mask Group.png";
import style from "./ProfileEditingPage.module.scss";
import LoadButton from "../../Components/Buttons/LoadButton";

const ProfileEditingPage: React.FC = () => {
  const [callSign, setcallSign] = useState("Позывной");
  const [email, setEmail] = useState("privatka@club.ru");
  const [name, setName] = useState("Имя");
  const [birthDate, setBirthDate] = useState("Дата рождения");
  const [family, setFamily] = useState("Фамилия");
  const [city, setCity] = useState("Город");

  const submitForm = () => {
    return null;
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
            <Input setData={setcallSign} placeholder={callSign} />
          </div>
          <div>
            <p>E-MAIL</p>
            <Input setData={setEmail} placeholder={email} />
          </div>
        </div>
        <div className={style.profile__input__first_row}>
          <div>
            <p>ИМЯ</p>
            <Input setData={setName} placeholder={name} />
          </div>
          <div>
            <p>ДАТА РОЖДЕНИЯ</p>
            <Input setData={setBirthDate} placeholder={birthDate} />
          </div>
        </div>
        <div className={style.profile__input__first_row}>
          <div>
            <p>ФАМИЛИЯ</p>
            <Input setData={setFamily} placeholder={family} />
          </div>
          <div>
            <p>ГОРОД</p>
            <Input setData={setCity} placeholder={city} />
          </div>
        </div>
        <div>
          <SaveButton submitForm={submitForm} />
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
