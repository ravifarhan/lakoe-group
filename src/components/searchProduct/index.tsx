import { Box, SelectChangeEvent, TextField } from "@mui/material";
import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const SearchProduct = () => {
  const [search, setSeacrch] = React.useState("");
  console.log(search);

  return (
    <Box display={"flex"}>
      <Box>
        <TextField
          placeholder="Cari Produk"
          inputProps={{
            style: { width: "255px", height: "5px" },
          }}
          onChange={(e) => setSeacrch(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default SearchProduct;
