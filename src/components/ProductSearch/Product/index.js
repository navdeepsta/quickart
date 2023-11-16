import React from "react";
import "./Product.css";

export default function Product({ product, onProductClick }) {
  const { title, main_image, price } = product;

  return (
    <div className="product">
      <img src={main_image} onClick={() => onProductClick(product)} />
      <p>{title}</p>
      <h3>${price}</h3>

      <input type="number" />
      <button>AddToCard</button>
    </div>
  );
}
