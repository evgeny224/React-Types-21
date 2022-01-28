import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PageWrapper from "../../Components/Common/PageWrapper";
import NotFoundPage from "../NotFoundPage";
import PersonalProfilePage from "../PersonalProfilePage";
import ProfileEditingPage from "../ProfileEditingPage";

const App = () => {
  const [callSign, setcallSign] = useState("Позывной");
  const [email, setEmail] = useState("privatka@club.ru");
  const [name, setName] = useState("Имя");
  const [birthDate, setBirthDate] = useState("Дата рождения");
  const [family, setFamily] = useState("Фамилия");
  const [city, setCity] = useState("Город");

  const userData = {
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
  };

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<ProfileEditingPage userData={userData} />} />
        <Route
          path="profile"
          element={<PersonalProfilePage userData={userData} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
