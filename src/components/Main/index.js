import React, { useState, useEffect } from "react";
import ProductSearch from "../ProductSearch";
import Navigation from "../Navigation";
import { useLocation } from "react-router-dom";
import { userCart } from "../../Util";
import { connect } from "react-redux";
import data from "./data.json";

function Main(props) {
  const [productData, setProductData] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setProductData(data);
    setShoppingCart(userCart.fetchCart());
  }, []);

  const { state } = useLocation();

  return (
    <>
      <Navigation state={state} />
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Main);
 