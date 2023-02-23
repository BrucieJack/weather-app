import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const MenuBox = mui(Box)({
  width: "20vw",
  height: "86vh",
  borderRight: "2px solid #000000",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   textAlign: "left",
});

export const FormBox = mui(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const MarginBox = mui(Box)({
  marginTop: "2vh",
});
