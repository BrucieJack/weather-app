import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const HeaderBox = mui(Box)({
  display: "flex",
  alignItems: "center",
  width: "100vw",
  height: "13vh",
  borderBottom: "4px solid #000000",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   textAlign: "left",
  backgroundColor: "rgb(136, 225, 252)",
});

export const HeaderTitle = mui(Typography)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "48px",
  marginLeft: "2vw",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   textAlign: "left",
});
