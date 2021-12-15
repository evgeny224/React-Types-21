import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductCardList from "./ProductCardList";
import * as productData from "./Data/clockData";
import "./App.css";

const App = () => {
  return (
    <div className="product__card">
      <Header />
      <div>
        <ProductCardList product={productData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
