import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import productData from "./productData.json";
import ProductFilter from "./ProductFilter";
export default function ProductSearch() {
  const [originalProducts, setOriginalProducts] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setOriginalProducts(productData);
  }, []);

  useEffect(() => {
    setProducts(originalProducts);
  }, [originalProducts]);

  const filterProducts = (filteredProducts) => {
    setProducts(filteredProducts);
  };

  if (originalProducts) {
    return (
      <div>
        <ProductFilter
          originalProducts={originalProducts}
          products={products}
          onProductFilter={(filteredProducts) =>
            filterProducts(filteredProducts)
          }
        />
        <ProductList products={products} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
