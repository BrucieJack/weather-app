import { Box, styled as mui } from "@mui/material";
import { Select, TextField } from "mui-rff";

export const MenuBox = mui(Box)`
  width: 20vw;
  height: 86vh;
  border-right: 2px solid #000000;
  flex-direction: row;
  @media (max-width: 820px) {
    border-right: 0px solid #000000;
    border-bottom: 2px solid #000000;
    width: 100vw;
    height: 10vh;
  }
`;

export const FormBox = mui(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 820px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CustomTextField = mui(TextField)({
  "& .MuiInputBase-root": {
    width: "17vw",
  },
});

export const CustomSelector = mui(Select)({
  "& .MuiSelect-select": {
    width: "14.5vw",
  },
});

export const MarginBox = mui(Box)({
  marginTop: "2vh",
});
