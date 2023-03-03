import React from "react";
import Navbar from "../components/Navbar";
import ProductContent from "../components/ProductContent";
import SearchBox from "../components/SearchBox";
import TopNav from "../components/TopNav";

const Product = () => {
  return (
    <div>
      <TopNav />
      <Navbar title />
      <SearchBox />
      <ProductContent />
    </div>
  );
};

export default Product;
