import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import BrandFilter from "./BrandFilter";

export default function ProductFilter({
  originalProducts,
  products,
  onProductFilter,
}) {
  const [category, setCategory] = useState("");

  const updateCategory = (updatedCategory) => {
    setCategory(updatedCategory);
  };

  return (
    <div className="product-filter">
      <CategoryFilter
        products={originalProducts}
        onCategoryFilter={onProductFilter}
        category={category}
        onUpdateCategory={(updatedCategory) => updateCategory(updatedCategory)}
      />
      <SortFilter products={products} onSortFilter={onProductFilter} />
      <BrandFilter
        originalProducts={originalProducts}
        category={category}
        onBrandFilter={onProductFilter}
      />
    </div>
  );
}
