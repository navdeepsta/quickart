import React from "react";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";

export default function ProductFilter({originalProducts, products, onProductFilter}) {
  return (
    <div className="product-filter">
      <CategoryFilter
        products={originalProducts}
        onCategoryFilter={onProductFilter}
      />
      <SortFilter
        products={products}
        onSortFilter={onProductFilter}
      />
    </div>
  );
}
