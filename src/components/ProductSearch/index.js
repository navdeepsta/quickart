import React from 'react';
import ProductList from './ProductList';
import products from './productData.json';

export default function ProductSearch() {
  return (
    <div>
        <ProductList products={products} />
    </div>
  )
}
