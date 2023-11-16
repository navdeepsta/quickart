import React from "react";
import Product from "../Product";
import "./ProductList.css";

export default function ProductList({products, onProductClick}) {
 
  return (
    <div className="product-list">
      {products &&
        products.map((product) => (
          <Product
            key={product.uniq_id}
            product={product}
            onProductClick={()=>onProductClick(product)}
          />
        ))}
    </div>
  );
}
