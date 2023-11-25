import React, { useState, useEffect } from "react";
import { userCart } from "../../../Util";
import "./Product.css";

export default function Product({ product, onProductClick, addToShoppingCart }) {
  const { title, main_image, price } = product;
  const [quantity, setQuantity] = useState(1);
  const [buttonStatus, setButtonStatus] = useState("AddToCart");

  useEffect(()=>{
    const item = userCart.fetchCart().find(item => item.uniq_id === product.uniq_id);
    if(item) {
      setQuantity(item.quantity);
      setButtonStatus("Update");
    }
  }, [])

  const handleChange = ({target}) => {
    setQuantity(target.value)
  }

  const handleClick = () => {
    const item = { ...product, quantity };
    userCart.saveToCart( item );
    
    addToShoppingCart(userCart.fetchCart());
    
    if(quantity > 0) {
      setButtonStatus("Update");
    }else{
      setButtonStatus("AddToCart");
      setQuantity(1);
    }
  }

  return (
    <div className="product">
      <img src={main_image} onClick={() => onProductClick(product)} />
      <p>{title}</p>
      <h3>${price}</h3>

      <input type="number" min={0} value={quantity} onChange={handleChange}/>
      <button onClick={handleClick}>{buttonStatus}</button>
    </div>
  );
}
