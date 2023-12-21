import React from "react";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Navigation.css";

export default function Navigation({ shoppingCart, state }) {
  return (
    <nav className="navigation">
      {!state?.loggedIn ? (
        <Link to="/signin">
          <AccountCircle fontSize="medium" color="primary" />
        </Link>
      ) : (
        <>
          <strong>
            {state?.user.firstName
              ? state?.user.firstName
              : state?.user.username}
          </strong>
          <Link to="/signin" state={state}>
            <AccountCircle fontSize="medium" color="primary" />
          </Link>
        </>
      )}
      <div className="cart">
        <Link to="/cart" state={{ cart: shoppingCart }} underline="none">
          <AddShoppingCartIcon fontSize="medium" color="primary" />
        </Link>{" "}
        {shoppingCart?.reduce((acc, curr) => acc + curr.quantity, 0)}
      </div>
    </nav>
  );
}
