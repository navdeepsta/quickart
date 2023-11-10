import React from "react";
import Product from "../Product";
import './ProductList.css';

export default function ProductList(props) {
  return (
    <div className="product-list">
      {props.products.map((product) => (
        <Product key={product.uniq_id} product={product} />
      ))}
    </div>
  );
}
