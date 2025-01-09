"use client";
import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid2,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  key_benefits,
  IncludedAndExcluded,
  contents,
  latest_blogs,
  insurance_sub_categories,
} from "@/data";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledCard = styled(Box)(({}) => ({
  minHeight: "200px",
  width: "80px",
  backgroundColor: "#DCF1FF",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingInline: "30px",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "10px",
}));

const StyledBox = styled(Box)(({}) => ({
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  border: "2px solid #EFEFEF",
  padding: "20px",
  minHeight: "220px",
}));

const CarInsurance = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      mt={8}
      sx={{
        background:
          "radial-gradient(circle at left, rgba(131,183,244,0.2) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Container>
        <Grid2 container spacing={6}>
          <Grid2 size={{ md: 7.5, sm: 12, xs: 12 }}>
            <Typography
              color="green"
              letterSpacing={2}
              variant="subtitle2"
              fontWeight={"600"}
              textTransform={"uppercase"}
            >
              Know more about car insurance
            </Typography>
            <Stack mt={2} spacing={2}>
              <Typography variant="h4" fontWeight={"500"}>
                What is Car Insurance?
              </Typography>
              <Typography
                color="textSecondary"
                variant="subtitle2"
                fontWeight={"400"}
              >
                {` Car insurance provides financial protection for car owners
                againts expenses arising from accidents, theft, or damages to
                the vehicle. It's essential coverage that includes liability
                protection and personal damage cover, often legally required for
                vehicle owners.`}
              </Typography>
            </Stack>
            <Box mt={6}>
              <Typography variant="h4" fontWeight={"500"}>
                Key Benefits
              </Typography>
              <Box mt={6} maxWidth={isDesktop ? "90%" : "100%"}>
                <Grid2 container columnSpacing={6} rowSpacing={10}>
                  {key_benefits?.map((ele, index) => {
                    return (
                      <Grid2 key={index} size={{ md: 6, sm: 6, xs: 12 }}>
                        <Box textAlign={"center"}>
                          <Stack
                            sx={{
                              border: "1px solid",
                              borderColor: "#99c1f7",
                              borderRadius: "20px",
                              padding: "15px",
                              width: "fit-content",
                              margin: "0 auto",
                            }}
                          >
                            <VerifiedUserIcon
                              sx={{
                                color: "#0669F0",
                              }}
                            />
                          </Stack>
                          <Typography
                            mt={1}
                            textAlign={"center"}
                            variant="h6"
                            fontWeight={"600"}
                            color="#27426C"
                          >
                            {ele.title}
                          </Typography>

                          <Typography
                            color="textSecondary"
                            textAlign={"center"}
                            variant="subtitle2"
                            mt={1}
                          >
                            {ele.description}
                          </Typography>
                        </Box>
                      </Grid2>
                    );
                  })}
                </Grid2>
              </Box>
            </Box>
            <Box mt={8}>
              <Typography variant="h4" fontWeight={"500"}>
                Why Do You Need Car Insurance?
              </Typography>
              <Typography
                color="textSecondary"
                variant="subtitle2"
                fontWeight={"400"}
                mt={2}
              >
                {` Car insurance helps car owners avoid financial strain due to repairs, replacements, or third-party liabilities and ensures compliance with legal requirements.`}
              </Typography>
            </Box>
            <Box mt={8}>
              <Typography variant="h4" fontWeight={"500"}>
                {`What's Included & Excluded?`}
              </Typography>
              <Box mt={4} maxWidth={isTablet ? "100%" : "90%"}>
                <Stack
                  direction={isTablet ? "column" : "row"}
                  alignItems={"center"}
                  spacing={6}
                  p={isTablet ? 4 : 0}
                >
                  {IncludedAndExcluded.map((ele, index) => {
                    return (
                      <StyledCard key={index}>
                        <Typography
                          textAlign={"center"}
                          variant="h6"
                          fontWeight={"600"}
                          color="#042253"
                        >
                          {ele.title}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"
                          mt={1}
                        >
                          {ele.description}
                        </Typography>
                      </StyledCard>
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 4.5, sm: 12, xs: 12 }}>
            <Box>
              <Typography variant="h4" fontWeight={"500"}>
                Contents
              </Typography>
              <Stack spacing={0.5}>
                {contents.map((ele, index) => {
                  return (
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      key={index}
                    >
                      <ArrowForwardIcon
                        sx={{
                          color: "#0669F0",
                        }}
                      />
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={"500"}
                      >
                        {ele.list}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
            <Box mt={6}>
              <Typography variant="h4" fontWeight={"500"}>
                Latest Blogs
              </Typography>
              <Box>
                {latest_blogs.map((ele, index) => {
                  return (
                    <Stack key={index} pt={2}>
                      <Typography
                        color="green"
                        letterSpacing={1}
                        variant="subtitle2"
                        fontWeight={"600"}
                      >
                        {ele.date}
                      </Typography>
                      <Typography mt={1} fontWeight="500" variant="h6">
                        {ele.title}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        mt={1}
                      >
                        {ele.description}
                      </Typography>
                      <Divider sx={{ mt: 2 }} />
                    </Stack>
                  );
                })}
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      <Box
        mt={6}
        sx={{
          background:
            "radial-gradient(circle at right, rgba(131,183,244,0.2) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight={"500"}>
            Car Insurance Sub-categories:
          </Typography>
          <Box mt={6}>
            <Grid2 container spacing={4}>
              {insurance_sub_categories.map((ele, index) => {
                return (
                  <Grid2 key={index} size={{ md: 3, sm: 6, xs: 12 }}>
                    <StyledBox>
                      <Box
                        sx={{
                          backgroundColor: "#198BF7",
                          height: "60px",
                          width: "60px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="h5"
                          fontWeight={"700"}
                          color="#ffffff"
                        >
                          {index + 1}.
                        </Typography>
                      </Box>
                      <Typography
                        color="#27426C"
                        maxWidth={"180px"}
                        mt={2}
                        fontWeight={"700"}
                      >
                        {ele.title}
                      </Typography>
                      <Typography
                        mt={2}
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={"500"}
                      >
                        {ele.description}
                      </Typography>
                    </StyledBox>
                  </Grid2>
                );
              })}
            </Grid2>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CarInsurance;
