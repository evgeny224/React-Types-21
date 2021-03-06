import React from "react";
import { Routes, Route } from "react-router-dom";
import PageWrapper from "../../Components/Common/PageWrapper";
import AuthPage from "../AuthPage";
import NotFoundPage from "../NotFoundPage";
import PersonalProfilePage from "../PersonalProfilePage";
import ProfileEditingPage from "../ProfileEditingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<AuthPage />} />
        <Route path="editprofile" element={<ProfileEditingPage />} />
        <Route path="profile" element={<PersonalProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
