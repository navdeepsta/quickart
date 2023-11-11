import React, { useState, useEffect } from 'react';

export default function CategoryFilter({ products, onCategoryFilter }) {
  const [category, setCategory] = useState('Categories');

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
    setCategory(e.target.value);
  };

  const handleClick = () => {
    setCategory('Categories');
    onCategoryFilter(products);
  };

  return (
    <>
      <select name='categories' value={category} onChange={handleSelect}>
        <option value='Categories'>
          {category === 'Categories' ? 'Categories' : null}
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
