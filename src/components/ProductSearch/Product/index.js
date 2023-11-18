import React, { useState } from "react";
import "./Product.css";

export default function Product({ product, onProductClick, addToShoppingCart }) {
  const { title, main_image, price } = product;
  const [quantity, setQuantity] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("AddToCart");

  const handleChange = ({target}) => {
    setQuantity(target.value)
  }

  const handleClick = () => {
    const item = { ...product, quantity };
    
    addToShoppingCart(prev => {
      const result = prev.filter(product=>product.uniq_id!==item.uniq_id);
      result.push(item);
      return result;
    });
    
    if(quantity > 0) {
      setButtonStatus("Update")
    }else{
      setButtonStatus("AddToCart")
    }
  }

  return (
    <div className="product">
      <img src={main_image} onClick={() => onProductClick(product)} />
      <p>{title}</p>
      <h3>${price}</h3>

      <input type="number" min={0} value={quantity} onChange={handleChange}/>
      <button disabled={quantity===0} onClick={handleClick}>{buttonStatus}</button>
    </div>
  );
}
