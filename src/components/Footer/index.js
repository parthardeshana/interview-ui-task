"use client";
import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid2,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { footer_data } from "@/data";

const data = [
  { icon: <FacebookIcon sx={{ fontSize: "30px" }} /> },
  { icon: <InstagramIcon sx={{ fontSize: "30px" }} /> },
  { icon: <LinkedInIcon sx={{ fontSize: "30px" }} /> },
  { icon: <YouTubeIcon sx={{ fontSize: "30px" }} /> },
];

const StyledFooter = styled(Box)(({}) => ({
  backgroundColor: "#102D5B",
  paddingInline: "20px",
  paddingBlock: "40px",
  marginTop: "70px",
}));

const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <StyledFooter>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} paddingLeft={isDesktop ? 2 : 0}>
          <Typography variant="h4" fontWeight="900" color="#ffffff">
            LOGO
          </Typography>
          <Typography
            color="#EFEFEF"
            variant="subtitle1"
            mt={4}
            maxWidth={"90%"}
          >
            {` Hi there, we're FINQY Insure. We're driven with a vision to ease
            access to insurance products for our customers.`}
          </Typography>
          <Stack direction="row" mt={3} spacing={2}>
            {data.map((ele, index) => (
              <Box
                key={index}
                sx={{
                  color: "#D9F2FF",
                  cursor: "pointer",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                {ele.icon}
              </Box>
            ))}
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 8 }}>
          <Grid2 container spacing={4}>
            {footer_data.map((section, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Typography
                  color="#ffffff"
                  variant="body1"
                  fontWeight="600"
                  gutterBottom
                >
                  {section.title}
                </Typography>
                <Stack mt={2} spacing={1}>
                  {section.sub_items.map((item, idx) => (
                    <Typography color="#BBD4E8" variant="body1" key={idx}>
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>

      <Box mt={6}>
        <Typography
          fontWeight="400"
          variant="subtitle2"
          textAlign="center"
          color="#ffffff"
        >
          <strong>IRDAI Broker Code:</strong> IRDAI/DB 1104/2024 &nbsp;
          <strong>IRDAI License No:</strong> 985 &nbsp;
          <strong>License Category:</strong> Direct (Life & General) &nbsp;
          <strong>Validity:</strong> 07.08.2024 - 06.08.2027 &nbsp;
          <strong>IBAI Membership No:</strong> 33985
        </Typography>
        <Typography
          fontWeight="400"
          variant="subtitle2"
          textAlign="center"
          color="#ffffff"
        >
          Finqyinsure is powered by Policysafe Insurance Brokers Pvt. Ltd.
        </Typography>
        <Typography
          fontWeight="400"
          variant="subtitle2"
          textAlign="center"
          color="#ffffff"
        >
          <strong>Registered & Corporate Office Address:</strong> Office No:
          701, Vihan Building, Sonawala Lane, Walbhat Road, Goregoan (E), Mumbai
          400063, Maharashtra, India
        </Typography>
        <Typography
          fontWeight="400"
          variant="subtitle2"
          textAlign="center"
          color="#ffffff"
        >
          <strong>CIN:</strong> U66220MH2023PTC410333 &nbsp;&nbsp;
          <strong>Principal Officer:</strong> Dharmapal Puthran
        </Typography>
        <Typography
          fontWeight="400"
          variant="subtitle2"
          textAlign="center"
          color="#ffffff"
        >
          <strong>Disclaimer:</strong> {`Insurance is a matter of solicitation.
          The information available on this portal pertains to the insurance
          company with which we hold a legal agreement. The prospect's details
          entered on this portal may be shared with the respective insurer.`}
        </Typography>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
