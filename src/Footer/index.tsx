import React from "react";
import "./index.css";
import Company from "../Components/Company";
import Customers from "../Components/Customers";
import Works from "../Components/Works";
import Connection from "../Components/Connection";

const Footer = () => {
  return (
    <footer className="footer">
      <Company />
      <Customers />
      <Works />
      <Connection />
    </footer>
  );
};

export default Footer;
