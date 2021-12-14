import React from "react";
import "./index.css";

type CountryPropsType = {
  country: string;
};

const Country: React.FC<CountryPropsType> = (props) => {
  const { country } = props;
  return (
    <div className="product__card__component-country">
      <h4>Страна призводитель: {country}</h4>
    </div>
  );
};

export default Country;
