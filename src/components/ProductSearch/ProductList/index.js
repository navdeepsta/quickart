import React, { useState, useEffect } from "react";
import Product from "../Product";
import Pagination from "./Pagination";
import "./ProductList.css";

export default function ProductList({ products, onProductClick }) {
  const pageSize = 20; // Set your desired page size
  const [prods, setProds] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProds(products);
    setCurrentPage(1);
  }, [products]);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        onPageChange={(newPage) => setCurrentPage(newPage)}
        products={prods}
        pageSize={pageSize}
      />
      <div className="product-list">
        {prods
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((product) => (
            <Product
              key={product.uniq_id}
              product={product}
              onProductClick={() => onProductClick(product)}
            />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={(newPage) => setCurrentPage(newPage)}
        products={prods}
        pageSize={pageSize}
      />
    </>
  );
}
