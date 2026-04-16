import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
function TextFieldUsage() {
  const cities = [
    {
      value: "istanbul",
      label: "34",
    },
    {
      value: "Adana",
      label: "1",
    },
  ];
  const [value, setValue] = useState("");
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return (
    <Box>
      <TextField
        select
        label="Select"
        value={value}
        onChange={handleValueChange}
        helperText="Please select your city"
      >
        {cities.map((cities) => (
          <MenuItem key={cities.label} value={cities.value}>
            {cities.value}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default TextFieldUsage;
