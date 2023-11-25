import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ shoppingCart, state }) {
  return (
    <>
      {!state?.loggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          {state?.user.firstName ? state?.user.firstName : state?.user.username}
          <Link to="/login" state={state}>
            Profile
          </Link>
        </>
      )}
      <Link to="/cart" state={{ cart : shoppingCart }}>
        Cart : {shoppingCart?.length} items 
      </Link>
    </>
  );
}
