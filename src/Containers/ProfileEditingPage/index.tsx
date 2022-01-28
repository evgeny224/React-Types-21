import React from "react";
import { useNavigate } from "react-router-dom";
import SaveButton from "../../Components/Buttons/SaveButton";
import Input from "../../Components/Input";
import mask from "../../Assets/Mask Group.png";
import style from "./ProfileEditingPage.module.scss";
import LoadButton from "../../Components/Buttons/LoadButton";

type ProfileEditingPagePropsTypes = {
  userData: {
    callSign: string;
    email: string;
    name: string;
    birthDate: string;
    family: string;
    city: string;
    setcallSign: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setBirthDate: React.Dispatch<React.SetStateAction<string>>;
    setFamily: React.Dispatch<React.SetStateAction<string>>;
    setCity: React.Dispatch<React.SetStateAction<string>>;
  };
};

const ProfileEditingPage: React.FC<ProfileEditingPagePropsTypes> = (props) => {
  const {
    userData: {
      callSign,
      email,
      name,
      birthDate,
      family,
      city,
      setcallSign,
      setEmail,
      setName,
      setBirthDate,
      setFamily,
      setCity,
    },
  } = props;

  const history = useNavigate();

  const submitForm = () => {
    history("/profile");
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
