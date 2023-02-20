import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const BigBox = mui(Box)({
  width: "39vw",
  height: "41vh",
  border: "4px solid #000000",
  marginTop: "5vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(199, 240, 252)",
  //   alignItems: "center",
  //   textAlign: "left",
});

export const TempBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  alignContent: "center",
  marginTop: "3vh",
  marginBottom: "3vh",
});

export const AdvBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

export const AdvColumn = mui(Box)({
  display: "flex",
  flexDirection: "column",
  //   marginLeft: "4vw",
});

export const Temp = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "4vh",
});

export const AdvName = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 300,
  fontSize: "1.8vh",
  color: "#797676",
  marginBottom: "1vh",
});

export const AdvValue = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "2.2vh",
  marginBottom: "1vh",
});

export const SmallBox = mui(Box)({
  width: "8vw",
  height: "14vh",
  border: "4px solid #000000",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgb(199, 240, 252)",
  //   textAlign: "left",
});

export const SmallBoxText = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "3vh",
});
