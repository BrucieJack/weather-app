import { FormBox, MarginBox, MenuBox } from "./components";
import { Form } from "react-final-form";
import { Select, TextField } from "mui-rff";
import { Button, MenuItem } from "@mui/material";

export default function Menu() {
  const handleSubmit = () => {
    console.log();
  };

  return (
    <MenuBox>
      <FormBox>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <MarginBox>
                <TextField label="Город" name="city" required={true} />
              </MarginBox>
              <MarginBox>
                <Select name="api" label="API">
                  <MenuItem value="AAAAAA">AAAAAA</MenuItem>
                  <MenuItem value="BBBBBB">BBBBBB</MenuItem>
                </Select>
              </MarginBox>
              <MarginBox>
                <Button type="submit" variant="outlined">
                  Поиск
                </Button>
              </MarginBox>
            </form>
          )}
        />
      </FormBox>
    </MenuBox>
  );
}
