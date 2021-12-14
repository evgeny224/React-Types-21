import React from "react";
import "./index.css";
import Button from "../Components/Button";
import ProductTitle from "../Components/Title";
import Price from "../Components/Price";
import Country from "../Components/Country";

type ProductInfoPropsType = {
  product: {
    name: string;
    photos: string;
    number: number;
    country: string;
    counts: number;
  };
};
const ProductCard: React.FC<ProductInfoPropsType> = (props) => {
  const {
    product: { name, photos, number, country, counts },
  } = props;
  return (
    <div className="product__card__component">
      <ProductTitle title={{ name, number }} />
      <Country country={country} />
      <div>
        <div className="product__card-image">
          <img src={photos} alt="photos" />
        </div>
        <Price counts={counts} />
        <Button />
      </div>
    </div>
  );
};

export default ProductCard;
