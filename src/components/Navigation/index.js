import React from "react";

export default function Navigation({shoppingCart}) {
  return (
    <>
    <div>
      Cart : {shoppingCart?.length} items | Total : ${shoppingCart.reduce((a, c) => a + (c.quantity*c.price), 0).toFixed(2)}
    </div>
    </>
  );
}
