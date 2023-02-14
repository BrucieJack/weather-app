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

export const DataBox = mui(Box)({
  width: "79vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const DaysBox = mui(Box)({
  width: "79vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "8vh",
});
