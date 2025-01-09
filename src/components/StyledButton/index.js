import React from "react";
import { Button, styled } from "@mui/material";

const StyledWrapper = styled(Button)(({}) => ({
  padding: "8px 32px",
  backgroundColor: "#0669F0",
  color: "#ffffff",
  textTransform: "capitalize",
  fontWeight: 400,
  borderRadius:"8px",
  "&:hover": {
    backgroundColor: "#0669F0",
    color: "#ffffff",
  },
}));

const StyledButton = ({ btnTitle, endIcon, sx = {} }) => {
  return (
    <StyledWrapper endIcon={endIcon} sx={sx}>
      {btnTitle}
    </StyledWrapper>
  );
};

export default StyledButton;
