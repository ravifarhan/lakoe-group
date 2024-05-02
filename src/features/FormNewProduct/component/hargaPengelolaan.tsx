import { FormEvent, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormLabel,
} from "@mui/material";

const HargaPengelolaan = () => {
  const [productPrice, setProductPrice] = useState("");
  const [minProduct, setMinProduct] = useState("");
  const [stokProduct, setStokProduct] = useState("");
  const [sku, setSku] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Product price:", productPrice);
    console.log("Minimal Pembelian:", minProduct);
    console.log("Minimal Pembelian:", stokProduct);
    console.log("Minimal Pembelian:", sku);
    setStokProduct("");
    setSku("");
    setProductPrice("");
    setMinProduct("");
  };

  return (
    <>
      <Box
        sx={{ mt: 2, p: 2 }}
        borderRadius={"8px"}
        flexDirection={"row"}
        bgcolor={"#CECECE"}
      >
        <Typography variant="h6" color={"black"} gutterBottom>
          Harga
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormLabel component="legend">
                Harga <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">
                Minimal Pembelian <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={minProduct}
                onChange={(e) => setMinProduct(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box component="span" pr={1}>
                        Product
                      </Box>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#CECECE"}>
        <Typography variant="h6" color="black" gutterBottom>
          Pengelolaan Produk
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">
                Stok Produk<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={stokProduct}
                onChange={(e) => setStokProduct(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">
                SKU (Stock Keeping Unit)<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default HargaPengelolaan;
