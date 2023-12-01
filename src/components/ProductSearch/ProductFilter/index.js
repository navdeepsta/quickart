import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import BrandFilter from "./BrandFilter";
import Stack from "@mui/material/Stack";

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
      <Stack direction="row" spacing={1} justifyContent="center" my={1}>
        <CategoryFilter
          products={originalProducts}
          onCategoryFilter={onProductFilter}
          category={category}
          onUpdateCategory={(updatedCategory) =>
            updateCategory(updatedCategory)
          }
        />
        <SortFilter products={products} onSortFilter={onProductFilter} />
      </Stack>
      <Stack  direction="row" justifyContent="center" my={1}>
      <BrandFilter
        originalProducts={originalProducts}
        category={category}
        onBrandFilter={onProductFilter}
      />
      </Stack>
    </div>
  );
}
