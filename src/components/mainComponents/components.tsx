import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const WeatherAppBox = mui(Box)({
  width: "100vw",
  height: "100vh",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   textAlign: "left",
});

export const MainBox = mui(Box)({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
});
