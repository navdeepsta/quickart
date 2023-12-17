import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PageDetails.css";
export default function ProductDetails({ product, displayProduct }) {
  const images = product?.images?.split("|");
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (product) {
    return (
      <>
        <Button variant="outlined" onClick={() => displayProduct(false)}>
          Back
        </Button>
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <div className="image-container">
                <img className="main-image" src={selectedImage} />

                <div className="image-slider">
                  <Slider {...settings}>
                    {images.map((image) => (
                      <div className="image-slider-images" key={image}>
                        <img
                          src={image}
                          onClick={() => handleImageSelect(image)}
                        />
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
                  <p className="product-price">${product.price}</p>
                  <span
                    className={
                      product.availability === "InStock"
                        ? "in-stock"
                        : "out-of-stock"
                    }
                  >
                    {product.availability ? product.availability : "OutOfStock"}
                  </span>
                  <br />
                  <Box mt={2}>
                  <Button variant="outlined" >Add To Cart</Button>
                  </Box>
                </>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
