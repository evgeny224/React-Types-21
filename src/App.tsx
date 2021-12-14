import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductCard from "./ProductCard";
import {
  CasioClock,
  InvictaClock,
  CitizenClock,
  SeikoClock,
} from "./Data/clockData";
import "./App.css";

const App = () => {
  return (
    <div className="product__card">
      <Header />
      <div className="product__card-list">
        <ProductCard product={CasioClock} />
        <ProductCard product={InvictaClock} />
        <ProductCard product={CitizenClock} />
        <ProductCard product={SeikoClock} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
