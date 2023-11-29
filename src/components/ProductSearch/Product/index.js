import React, { useState, useEffect } from "react";
import { userCart } from "../../../Util";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./Product.css";

export default function Product({
  product,
  onProductClick,
  addToShoppingCart,
}) {
  const { title, main_image, price } = product;
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
    const item = { ...product, quantity };
    userCart.saveToCart(item);
    addToShoppingCart(userCart.fetchCart());
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          width="25%"
          padding={1}
        >
          ${price}
        </Typography>
      </Stack>
      <Stack spacing={0.5} justifyContent="center" my={1} mx={1}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Add To Cart
        </Button>
      </Stack>
    </Card>
  );
}
