import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PageDetails.css";
export default function ProductDetails({ product, displayProduct }) {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  if (product) {
    const images = product.images.split("|");
    return (
      <>
        <Button variant="outlined" onClick={() => displayProduct(false)}>
          Back
        </Button>
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <div className="image-container">
                <img className="main-image" src={images[0] && images[0]} />

                <div className="image-slider">
                  <Slider {...settings}>
                    {images.map((image) => (
                      <div className="image-slider-images">
                        <img key={image} src={image} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <>
                  <p>{product.title}</p>
                  <p>Brand: {product.brand}</p>
                  <p>${product.price}</p>
                  <p>{product.availability}</p>
                  <Button variant="outlined">Add To Cart</Button>
                </>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
