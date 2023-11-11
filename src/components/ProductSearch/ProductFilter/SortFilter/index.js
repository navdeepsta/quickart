import React, { useEffect, useState } from 'react';

export default function SortFilter({ products, onSortFilter }) {
  const [sortOrder, setSortOrder] = useState('price');
  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };
  useEffect(() => {
    if (sortOrder === 'lowToHigh') {
      onSortFilter([...products].sort((a, b) => a.price - b.price));
    }
    if (sortOrder === 'highToLow') {
      onSortFilter([...products].sort((a, b) => b.price - a.price));
    }
    return () => {
      setSortOrder('price');
    };
  }, [sortOrder]);

  return (
    <>
      <select name='sort' value={sortOrder} onChange={handleChange}>
        <option value={sortOrder}>Price</option>
        <option value='lowToHigh'>Low to High</option>
        <option value='highToLow'>High to Low</option>
      </select>
    </>
  );
}
