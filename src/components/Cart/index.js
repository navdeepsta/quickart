import React, { useState, useEffect } from "react";
import { userCart } from "../../Util";
import { useLocation, Link } from "react-router-dom";

export default function Cart() {
  const { state } = useLocation();
  const [cart, setCart] = useState([]);
 
  useEffect(()=>{
    if(state) {
      setCart(state.cart)
    }
  }, []);

  const handleClick = ( item ) => {
    userCart.removeFromCart(item);
    setCart(userCart.fetchCart());
  }

  if (state)
    return (
      <>
        <Link to="/">Back</Link>
        <h1>Cart</h1>
        {cart.map((item) => (
          <p key={item.uniq_id}>
            {item.price} * {item.quantity} = ${item.price * item.quantity}{" "}
            <button onClick={()=>handleClick(item)}>remove</button>
          </p>
        ))}
        Total = $
        {cart
          .reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
          .toFixed(2)}
      </>
    );
}
