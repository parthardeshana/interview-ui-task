"use client";
import React from "react";
import {
  Box,
  Container,
  Grid2,
  Stack,
  Typography,
  OutlinedInput,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//relative path imports
import Header from "@/components/Header";
import StyledButton from "../StyledButton";
import Image from "next/image";

const HeroBanner = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLaptop = useMediaQuery("(min-width: 800px) and (max-width: 1024px)");
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mt={isTablet && 8}>
      <Header />
      <Box
        height={{ xs: "auto", md: isDesktop ? "90vh" : "60vh" }}
        sx={{
          paddingBlock: { xs: "20px", md: "0" },
          background:
            "radial-gradient(circle at right, rgba(131,183,244,0.2) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Container>
          <Grid2 container spacing={4} alignItems="center">
            <Grid2
              size={{ xs: 12, md: 7 }}
              sx={{
                paddingRight: { xs: 0, md: 8 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Image
                src="/assets/images/driving_Header.webp"
                alt="Driving Header"
                width={500}
                height={500}
                style={{
                  width: isDesktop ? "100%" : "70%",
                  height: "auto",
                }}
              />
            </Grid2>

            <Grid2
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: { xs: "flex-start", md: "center" },
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight="600">
                Car Insurance
              </Typography>

              <Stack
                mt={6}
                spacing={2}
                direction={isTablet ? "column" : "row"}
                width="100%"
                alignItems="center"
              >
                <OutlinedInput
                  placeholder="Enter Registration Number..."
                  sx={{
                    width: isLaptop ? "50%" : isTablet ? "100%" : "60%",
                    borderRadius: "10px",
                    height: "50px",
                  }}
                />
                <StyledButton
                  sx={{
                    width: isLaptop ? "50%" : isTablet ? "100%" : "40%",
                    height: "50px",
                  }}
                  btnTitle="Get Quotes"
                  endIcon={<ArrowForwardIcon />}
                />
              </Stack>

              <Typography
                textAlign="center"
                mt={2}
                fontWeight="500"
                variant="body1"
                textTransform="uppercase"
              >
                or
              </Typography>

              <StyledButton
                sx={{
                  width: "100%",
                  marginTop: 2,
                  paddingBlock: "10px",
                }}
                btnTitle="Proceed without Car Number"
                endIcon={<ArrowForwardIcon />}
              />
              <StyledButton
                sx={{
                  width: "100%",
                  marginTop: 3,
                  paddingBlock: "10px",
                }}
                btnTitle="Brand New Car"
                endIcon={<ArrowForwardIcon />}
              />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroBanner;
