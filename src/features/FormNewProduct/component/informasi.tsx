import React, { useState } from "react";
import {
  TextField,
  Grid,
  MenuItem,
  InputAdornment,
  Typography,
  FormLabel,
  Box,
} from "@mui/material";

const Informasi = () => {
  const [productName, setProductName] = useState("");

  const [productLink, setProductLink] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product Name:", productName);
    console.log("Product Link:", productLink);
    console.log("Product Category:", productCategory);
    setProductName("");
    setProductLink("");
    setProductCategory("");
  };

  return (
    <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#CECECE"}>
      <Typography variant="h6" color={"black"} gutterBottom>
        Informasi Produk
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Nama Produk<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormLabel component="legend">
              URL Halaman Checkout<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">lakoe.store/</InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormLabel component="legend">
              Kategori<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              select
              fullWidth
              variant="outlined"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
              <MenuItem value="Home & Kitchen">Home & Kitchen</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Informasi;
