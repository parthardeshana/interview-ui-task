import React from "react";
import { Box, } from "@mui/material";
//relative path imports
import HeroBanner from "@/components/HeroBanner";
import CarInsurance from "@/components/CarInsurance";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <CarInsurance />
      <Footer />
    </Box>
  );
};

export default Home;
