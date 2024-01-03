import React from "react";
import { userCart } from "../../Util";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCart } from "../Redux";
import "./Cart.css";

function Cart({ cart, setShoppingCart }) {
  const handleClick = (item) => {
    userCart.removeFromCart(item);
    setShoppingCart(userCart.fetchCart());
  };

  const handleQuantity = (item, type) => {
    let updatedItem = item;
    if (type === "add") {
      updatedItem = { ...item, quantity: item.quantity + 1 };
    }
    if (type === "remove" && item.quantity > 1) {
      updatedItem = { ...item, quantity: item.quantity - 1 };
    }

    const updatedCart = cart.map((product) => {
      if (product.uniq_id === item.uniq_id) {
        return updatedItem;
      }
      return product;
    });
    setShoppingCart(updatedCart);
  };

  return (
    <>
      <Link to="/">Back</Link>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        Shopping Cart
      </h1>
      <Box sx={{ flexGrow: 1 }} mt={2}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} sx={{ minWidth: 350 }}>
            <Box m={2}>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div className="item-container" key={item.uniq_id}>
                    <img src={item.main_image} />
                    <div className="item-content">
                      <div className="item-header">
                        <span className="item-title">
                          {getFormattedTitle(item.title)}
                        </span>
                        <span className="item-remove">
                          <ClearIcon
                            color="error"
                            onClick={() => handleClick(item)}
                          />
                        </span>
                      </div>
                      <p className="item-price">
                        {item.price} * {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="item-quantity">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleQuantity(item, "remove")}
                        >
                          -
                        </Button>
                        <Typography>{item.quantity}</Typography>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleQuantity(item, "add")}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-cart">The cart is empty.</div>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ minWidth: 350 }}>
            <div className="total-container">
              <span>
                Total = $
                {cart
                  ?.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button variant="outlined">Checkout</Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const getFormattedTitle = (title) => {
  let titleList = title.split(" ");
  return titleList[0] + " " + titleList[1] + " " + titleList[2];
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShoppingCart: (cart) => dispatch(setCart(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
