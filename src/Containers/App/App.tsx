import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageWrapper from "../../Components/Common/PageWrapper";
import PersonalAreaPage from "../PersonalAreaPage";
import ProfileEditingPage from "../ProfileEditingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/personalarea" element={<PersonalAreaPage />} />
        <Route path="/" element={<ProfileEditingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
