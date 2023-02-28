import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const WeatherAppBox = mui(Box)({
  width: "100vw",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: "rgb(181, 238, 255)",
});

export const MainBox = mui(Box)`
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const DataBox = mui(Box)`
  width: 79vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 820px) {
    width: 100vw;
  }
`;

export const DaysBox = mui(Box)`
  width: 79vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 8vh;
  @media (max-width: 820px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;
