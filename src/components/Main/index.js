import React, { useState, useEffect } from "react";
import ProductSearch from "../ProductSearch";
import Navigation from "../Navigation";
import { useLocation } from "react-router-dom";
import { userCart } from "../../Util";
import { connect } from "react-redux";
import data from "./data.json";

function Main() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    setProductData(data);
  }, []);

  const { state } = useLocation();

  return (
    <>
      <Navigation state={state} />
      {productData ? (
        <ProductSearch productData={productData} />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Main);
