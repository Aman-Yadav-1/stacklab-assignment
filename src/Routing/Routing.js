import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LandingPage from "../Components/LandingPage";
import { darkTheme } from "../Theme/Darkatheme";
import { lightTheme } from "../Theme/Lighttheme";
import Qrcode from "../Components/Qrcode";

const Routing = () => {
  const location = useLocation();

  const isDarkThemeRoute = location.pathname === "/";

  return (
    <ThemeProvider theme={isDarkThemeRoute ? darkTheme : lightTheme}>
      <CssBaseline />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/qr" element={<Qrcode/>} />
      </Routes>
    </ThemeProvider>
  );
};

export default Routing;
