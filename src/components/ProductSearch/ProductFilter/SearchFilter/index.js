import React, { useEffect, useState } from "react";
import "./SearchFilter.css";
export default function SearchFilter({ products, onSearchFilter }) {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    onSearchFilter(products.filter(product => {
       return product.title.toLowerCase().includes(searchItem)
    }))
  }, [searchItem]);

  return (
    <div className="search">
      <input type="text" placeholder="Search products" 
      onChange={(e)=>setSearchItem(e.target.value)} 
      />
    </div>
  );
}
