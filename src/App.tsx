import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
