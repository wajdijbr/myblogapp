import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Typography, Grid, Link, Card } from "@mui/material";
import Slider from "react-slick";
import { useRef } from "react";
import { Container } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProduct = (props) => {
  const { products } = props;
  //   const [products, setProducts] = useState();
  //  console.log(products,"products")

  const ref = useRef(null);

  const settings = {
    //  dots: false,
    //  infinite: true,
    //  speed: 500,
    //  slidesToShow: 3,
    //  slidesToScroll: 3 ,
    autoplay: true,
    autoplaySpeed: 1500,

    dots: true,
    // infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container maxWidth="lg">
        <Slider ref={ref} {...settings}>
          {products.map((product) => {
            return (
              <Grid
                item
                key={product.idProduit}
                xs={12}
                sm={12}
                md={6}
                mg={4}
                justifyContent="space-between"
              >
                <Card sx={{ maxWidth: 275, Margin: "25px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100px"
                      image={product.imgProduit}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.nomProduit}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        go to Amazon Product
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Order
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default FeaturedProduct;
