import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ shoppingCart, state }) {
  return (
    <>
      {!state?.loggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          {state?.user.username}
          <Link to="/login" state={state}>
            Profile
          </Link>
        </>
      )}
      Cart : {shoppingCart?.length} items | Total : $
      {shoppingCart
        .reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
        .toFixed(2)}
    </>
  );
}
