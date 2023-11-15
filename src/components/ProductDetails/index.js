import React from "react";

export default function ProductDetails(props) {
  const { product } = props;
  return (
    <div>
      <h2>Brand: {product.brand}</h2>
      <p>{product.description}</p>
      {product.images.split("|").map((image) => (
        <img key={image} src={image} />
      ))}
    </div>
  );
}
