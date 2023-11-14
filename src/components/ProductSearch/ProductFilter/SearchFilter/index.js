import React, { useEffect, useState } from "react";
import "./SearchFilter.css";
export default function SearchFilter({ products, onSearchFilter }) {
  const [searchItem, setSearchItem] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus) {
      onSearchFilter(
        products.filter((product) => {
          return product.title.toLowerCase().includes(searchItem);
        })
      );
    }
  }, [searchItem]);

  const handleBlur = () => {
    setFocus(false);
    setSearchItem("");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearchItem(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={handleBlur}
        value={searchItem}
      />
    </div>
  );
}
