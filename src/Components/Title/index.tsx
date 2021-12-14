import React from "react";
import "./index.css";

type ProductTitlePropsType = {
  title: {
    name: string;
    number: number;
  };
};

const ProductTitle: React.FC<ProductTitlePropsType> = (props) => {
  const {
    title: { name, number },
  } = props;
  return (
    <div className="product__card__component-title">
      <h1>{name}</h1>
      <p>Доступное количество: {number}шт</p>
    </div>
  );
};

export default ProductTitle;
