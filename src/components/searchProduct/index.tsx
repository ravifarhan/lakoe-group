import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const SearchProduct = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box display={"flex"}>
      <Box>
        {/* <ZoomInIcon /> */}
        <TextField
          placeholder="Cari Produk"
          inputProps={{
            style: { width: "255px", height: "5px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchProduct;
