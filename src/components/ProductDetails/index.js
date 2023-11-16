import React from "react";

export default function ProductDetails({ product, displayProduct }) {
  if (product) {
    return (
      <>
        <button onClick={() => displayProduct(false)}>Back</button>
        <h2>Brand: {product.brand}</h2>
        <p>{product.description}</p>
        {product.images.split("|").map((image) => (
          <img key={image} src={image} />
        ))}
      </>
    );
  }
}
