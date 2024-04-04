import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [water, setWater] = useState([]);
  const handleChange = (event) => {
    setWater(event.target.value);
  };

  return (
    <Box width="">
      <TextField
        style={{ width: "400px", marginBottom: "20px" }}
        label="Add-ins"
        select
        value={water}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Extra water">Extra water</MenuItem>
        <MenuItem value="Light water">Light water</MenuItem>
        <MenuItem value="No water">No water</MenuItem>
        <MenuItem value="water">water</MenuItem>
      </TextField>
      <TextField
        style={{ width: "400px" }}
        label="Expresso $ Shot Options"
        select
        value={water}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Extra water">Signatura Espresso Roast</MenuItem>
        <MenuItem value="Light water">Blonde Espresso Roast</MenuItem>
        <MenuItem value="No water">Decafo Espresso Roast</MenuItem>
        <MenuItem value="water">1/3 Decafo Espresso Roast</MenuItem>
        <MenuItem value="water">1/2 Decafo Espresso Roast</MenuItem>
        <MenuItem value="water">2/2 Decafo Espresso Roast</MenuItem>
      </TextField>
      {/* <TextField
        style={{ width: "400px" }}
        label="Expresso $ Shot Options"
        select
        value={water}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Extra water">Signatura Espresso Roast</MenuItem>
        <MenuItem value="Light water">Blonde Espresso Roast</MenuItem>
        <MenuItem value="No water">Decafo Espresso Roast</MenuItem>
        <MenuItem value="water">1/3 Decafo Espresso Roast</MenuItem>
        <MenuItem value="water">1/2 Decafo Espresso Roast</MenuItem>
        <MenuItem value="water">2/2 Decafo Espresso Roast</MenuItem>
      </TextField> */}
    </Box>
  );
};

export default MuiSelect;
