import React, { useState, useEffect } from "react";
import Product from "../Product";
import Pagination from "./Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./ProductList.css";

export default function ProductList({
  products,
  onProductClick,
  addToShoppingCart,
}) {
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
      <Box sx={{ flexGrow: 1 }} my={3}>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          {prods
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.uniq_id}>
                <Product
                  key={product.uniq_id}
                  product={product}
                  onProductClick={() => onProductClick(product)}
                  addToShoppingCart={addToShoppingCart}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
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
