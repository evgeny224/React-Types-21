import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Content";
import "./App.css";

const App = () => {
  return (
    <div className="product__card">
      <Header />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
