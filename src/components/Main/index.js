import React, { useState, useEffect } from "react";
import ProductSearch from "../ProductSearch";
import data from "./data.json";
export default function Main() {
  const [productData, setProductData] = useState(null);
 
  useEffect(() => {
    setProductData(data);
  }, []);

  return (
    <>
        {productData ? <ProductSearch productData={productData} /> : <h1>Loading...</h1>}
    </>
  )
}
