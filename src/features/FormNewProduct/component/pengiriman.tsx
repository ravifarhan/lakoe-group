import {
  Box,
  FormLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";

const Pengiriman = () => {
  const [beratProduct, setBeratProduct] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Berat Produk:", beratProduct);
    setBeratProduct("");
  };

  return (
    <Box
      sx={{ mt: 2, p: 2 }}
      borderRadius={"8px"}
      flexDirection={"row"}
      bgcolor={"#CECECE"}
    >
      <Typography variant="h6" color={"black"} gutterBottom>
        Berat & Pengiriman
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Berat Produk <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              value={beratProduct}
              onChange={(e) => setBeratProduct(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Gram</InputAdornment>
                ),
              }}
            />
          </Grid>
          <FormLabel
            component="legend"
            style={{
              marginTop: "20px",
              marginLeft: "15px",
              marginBottom: "-15px",
            }}
          >
            Ukuran Produk <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Grid item xs={12} container flexDirection="row" spacing={2}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                placeholder="Panjang"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={beratProduct}
                onChange={(e) => setBeratProduct(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cm</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                placeholder="Lebar"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={beratProduct}
                onChange={(e) => setBeratProduct(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cm</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                placeholder="Tinggi"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={beratProduct}
                onChange={(e) => setBeratProduct(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cm</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Pengiriman;
