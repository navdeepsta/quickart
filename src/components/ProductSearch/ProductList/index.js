import React from "react";
import Product from "../Product";
import './ProductList.css';

export default function ProductList(props) {
  const products = props.products;
  return (
    <div className="product-list">
      {products && products.map((product) => (
        <Product key={product.uniq_id} product={product} />
      ))}
    </div>
  );
}
