import React from "react";
import "./index.css";
import ProductCard from "../ProductCard";

type ProductCardListPropsType = {
  product: {
    CasioClock: {
      name: string;
      photos: string;
      number: number;
      country: string;
      counts: number;
    };
    InvictaClock: {
      name: string;
      photos: string;
      number: number;
      country: string;
      counts: number;
    };
    CitizenClock: {
      name: string;
      photos: string;
      number: number;
      country: string;
      counts: number;
    };
    SeikoClock: {
      name: string;
      photos: string;
      number: number;
      country: string;
      counts: number;
    };
  };
};

const ProductCardList: React.FC<ProductCardListPropsType> = (props) => {
  const {
    product: { CasioClock, InvictaClock, CitizenClock, SeikoClock },
  } = props;
  return (
    <div className="product__card-list">
      <ProductCard product={CasioClock} />
      <ProductCard product={InvictaClock} />
      <ProductCard product={CitizenClock} />
      <ProductCard product={SeikoClock} />
    </div>
  );
};

export default ProductCardList;
