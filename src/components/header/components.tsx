import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const HeaderBox = mui(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 13vh;
  border-bottom: 2px solid #000000;
  background-color: rgb(136, 225, 252);
`;

export const HeaderTitle = mui(Typography)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 48px;
  margin-left: 2vw;
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;
