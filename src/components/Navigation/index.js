import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ shoppingCart, state }) {
  return (
    <>
      {!state?.loggedIn ? (
        <Link to="/signin">Login</Link>
      ) : (
        <>
          {state?.user.firstName ? state?.user.firstName : state?.user.username}
          <Link to="/signin" state={state}>
            Profile
          </Link>
        </>
      )}
      <Link to="/cart" state={{ cart : shoppingCart }}>
        Cart : {shoppingCart?.reduce((acc,curr)=> acc + curr.quantity, 0)} items  
      </Link>
    </>
  );
}
