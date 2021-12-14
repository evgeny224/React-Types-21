import React from "react";
import "./index.css";

type PricePropsType = {
  counts: number;
};

const Price: React.FC<PricePropsType> = (props) => {
  const { counts } = props;
  return <div className="product__card__component-price">{counts} руб.</div>;
};

export default Price;
