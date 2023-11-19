import React, { useState, useEffect } from "react";
import ProductSearch from "../ProductSearch";
import Navigation from "../Navigation";
import { useLocation } from "react-router-dom";
import data from "./data.json";

export default function Main() {
  const [productData, setProductData] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setProductData(data);
  }, []);

  const { state } = useLocation();

  return (
    <>
      <Navigation shoppingCart={shoppingCart} state={state} />
      {productData ? (
        <ProductSearch
          productData={productData}
          addToShoppingCart={setShoppingCart}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
