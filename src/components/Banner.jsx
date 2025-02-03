import React from "react";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Container className="banner-content">
          <div className="banner-tagline">
            <Typography variant="h3">
              Track Your Favourite Crypto Currencies Online
            </Typography>
            <Typography variant="subtitle1" color="gray">
              Get All The Information Regarding Your Favourite Crypto currency.
            </Typography>
          </div>
          <Carousel />
        </Container>
      </div>
    </>
  );
};

export default Banner;
