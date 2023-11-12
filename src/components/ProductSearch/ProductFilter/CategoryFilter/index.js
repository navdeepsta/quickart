import React, { useEffect } from "react";

export default function CategoryFilter({
  products,
  onCategoryFilter,
  category,
  onUpdateCategory,
}) {
  const primaryCategories = [
    ...new Set(products.map((product) => product.primary_category)),
  ];

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.primary_category === category
    );
    if (filteredProducts.length > 0) onCategoryFilter(filteredProducts);
  }, [category]);

  const handleSelect = (e) => {
    onUpdateCategory(e.target.value);
  };

  const handleClick = () => {
    onUpdateCategory("");
    onCategoryFilter(products);
  };

  return (
    <>
      <select name="categories" value={category} onChange={handleSelect}>
        <option value="" disabled hidden>
          Categories
        </option>
        <option disabled>All Products ({products.length})</option>
        {primaryCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>All Products</button>
    </>
  );
}
