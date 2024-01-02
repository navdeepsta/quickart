import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import SearchFilter from "./ProductFilter/SearchFilter";
import ProductDetails from "../ProductDetails";

export default function ProductSearch({ productData }) {
  const [products, setProducts] = useState(productData);
  const [product, setProduct] = useState(null);
  const [displayProduct, setDisplayProduct] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  const filterProducts = (filteredProducts) => {
    setProducts(filteredProducts);
    setDisplayProduct(false);
  };

  const handleClick = (product) => {
    setProduct(product);
    setDisplayProduct(true);
  };

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <>
      <SearchFilter
        products={productData}
        onSearchFilter={filterProducts}
        onFilter={handleFilter}
      />
      {displayProduct ? (
        <ProductDetails product={product} displayProduct={setDisplayProduct} />
      ) : (
        <>
          {filter && (
            <ProductFilter
              originalProducts={productData}
              products={products}
              onProductFilter={(filteredProducts) =>
                filterProducts(filteredProducts)
              }
            />
          )}
          <ProductList
            products={products}
            onProductClick={(product) => handleClick(product)}
          />
        </>
      )}
    </>
  );
}
