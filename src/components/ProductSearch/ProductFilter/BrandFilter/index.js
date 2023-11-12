import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function BrandFilter({
  originalProducts,
  category,
  onBrandFilter,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const brands = [
    ...new Set(
      originalProducts?.map((product) => {
        if (!category) {
          return product.brand;
        }
        return product.primary_category === category ? product.brand : "";
      })
    ),
  ];
  const options = brands.map((brand) => ({ value: brand, label: brand }));
 

  useEffect(() => {
    const brands = selectedOptions.map(
      (selectedOption) => selectedOption.value
    );
    let filteredProducts = originalProducts;

    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        brands.includes(product.brand)
      );
    }
    let filteredByCategory = filteredProducts;
    if (category) {
      filteredByCategory = filteredProducts.filter(
        (product) => product.primary_category === category
      );
    }
    onBrandFilter(filteredByCategory);
  }, [selectedOptions, originalProducts, category]);

  const handleChange = (selectedItems) => {
    setSelectedOptions(selectedItems);
  };

  return (
    <Select
      options={options}
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      placeholder="Brands..."
    />
  );
}
