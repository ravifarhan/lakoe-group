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
          sx={{ width: "300px" }}
          inputProps={{ style: { height: "10px" } }}
        />
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <FormControl sx={{ width: "200px", marginLeft: "10px" }}>
          <InputLabel id="demo-simple-select-label" sx={{ height: "50px" }}>
            Semua Kategori
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ height: "8vh", color: "#b0b0b0" }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ width: "200px", marginLeft: "10px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Urutkan
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "8vh",
              color: "#b0b0b0",
            }}
            inputProps={{ style: { height: "10px" } }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchProduct;
