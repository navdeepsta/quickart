import React, { useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";

export default function CategoryFilter({
  products,
  onCategoryFilter,
  category,
  onUpdateCategory,
}) {
  const primaryCategories = [
    ...new Set(products?.map((product) => product.primary_category)),
  ];

  useEffect(() => {
    const filteredProducts = products?.filter(
      (product) => product.primary_category === category
    );
    if (filteredProducts?.length > 0) onCategoryFilter(filteredProducts);
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
      <FormControl sx={{ minWidth: 150 }} size="small">
        <InputLabel id="categories">Categories</InputLabel>
        <Select
          labelId="categories"
          id="categories"
          value={category}
          label="Categories"
          onChange={handleSelect}
        >
          <MenuItem disabled>All Products ({products?.length})</MenuItem>
          {primaryCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleClick}
      >
        All Items
      </Button>
    </>
  );
}
