import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const BigBox = mui(Box)`
  width: 60vmin;
  height: 41vmin;
  border: 2px solid #000000;
  border-radius: 15px;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(199, 240, 252);
`;

export const TempBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  alignContent: "center",
  marginTop: "3vmin",
  marginBottom: "3vmin",
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
  fontSize: "4vmin",
});

export const AdvName = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 300,
  fontSize: "1.8vmin",
  color: "#797676",
  marginBottom: "1vmin",
});

export const AdvValue = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "2vmin",
  marginBottom: "1vmin",
});

export const SmallBox = mui(Box)`
  width: 15vmin;
  height: 14vmin;
  border-radius: 15px;
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(199, 240, 252);
  // @media (max-width: 820px) {
  //   width: 20vw;
  // }
`;

export const SmallBoxText = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "3vmin",
});
