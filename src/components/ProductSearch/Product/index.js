import React, { useState, useEffect } from "react";
import { userCart } from "../../../Util";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";
import { setCart } from "../../Redux";

import "./Product.css";

function Product({
  product,
  onProductClick,
  setShoppingCart,
}) {
  const { title, main_image, price, availability } = product;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = userCart
      .fetchCart()
      .find((item) => item.uniq_id === product.uniq_id);
    if (item) {
      setQuantity(item.quantity);
    }
  }, []);

  useEffect(() => {
    product.quantity = quantity;
    userCart.saveToCart(product);
    setShoppingCart(userCart.fetchCart());
  }, [quantity]);

  const handleClick = () => { 
    setQuantity((prev) => prev + 1);
  };

  return (
    <Card sx={{ minWidth: 250 }}>
      <Stack onClick={() => onProductClick(product)}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={main_image}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" height={50}>
            {title.slice(0, 70)}
          </Typography>
        </CardContent>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Typography gutterBottom variant="h6" component="div" padding={1}>
          {availability === "InStock" ? `$${price}` : "Out of stock"}
        </Typography>
      </Stack>
      <Stack spacing={0.5} justifyContent="center" my={1} mx={1}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          disabled={availability !== "InStock"}
          onClick={handleClick}
        >
          Add To Cart
        </Button>
      </Stack>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShoppingCart: (cart) => dispatch(setCart(cart)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
