"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    htmlFontSize: 18,
  },
});

const AppLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppLayout;
