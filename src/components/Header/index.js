"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  styled,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
//relative path imports
import StyledButton from "@/components/StyledButton";

const StyledWrapper = styled(Box)(({}) => ({
  backgroundColor: "#ffffff",
  height: "60px",
  display: "flex",
  alignItems: "center",
  paddingInline: "20px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <StyledWrapper>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h5" fontWeight="900" color="#0669F0">
          LOGO
        </Typography>

        <Stack
          direction={"row"}
          spacing={5}
          alignItems={"center"}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography>About Us</Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography>Products</Typography>
            <ExpandMoreIcon />
          </Stack>
          <Typography>Benefits</Typography>
          <Typography>Blogs</Typography>
          <Stack direction={"row"} spacing={3}>
            <StyledButton btnTitle={"Login"} />
            <StyledButton
              btnTitle={"Posp"}
              sx={{ textTransform: "uppercase" }}
            />
          </Stack>
        </Stack>
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ p: 2 }}>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack spacing={5}>
            <Typography>About Us</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography>Products</Typography>
              <ExpandMoreIcon />
            </Stack>
            <Typography>Benefits</Typography>
            <Typography>Blogs</Typography>
            <Stack direction="column" spacing={2} width="100%" mt={2}>
              <StyledButton btnTitle={"Login"} />
              <StyledButton
                btnTitle={"Posp"}
                sx={{ textTransform: "uppercase" }}
              />
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </StyledWrapper>
  );
};

export default Header;
