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
  const [panjangProduct, setPanjangProduct] = useState("");
  const [lebarProduct, setLebarProduct] = useState("");
  const [tinggiProduct, setTinggiProduct] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Berat Produk:", beratProduct);
    setBeratProduct("");
    console.log("Berat Produk:", beratProduct);
    setPanjangProduct("");
    console.log("Berat Produk:", beratProduct);
    setLebarProduct("");
    console.log("Berat Produk:", beratProduct);
    setTinggiProduct("");
  };

  return (
    <Box
      sx={{ mt: 2, p: 2 }}
      borderRadius={"8px"}
      flexDirection={"row"}
      bgcolor={"#ffffff"}
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
              type="number"
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
                type="number"
                placeholder="Panjang"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={panjangProduct}
                onChange={(e) => setPanjangProduct(e.target.value)}
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
                type="number"
                placeholder="Lebar"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={lebarProduct}
                onChange={(e) => setLebarProduct(e.target.value)}
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
                type="number"
                placeholder="Tinggi"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                value={tinggiProduct}
                onChange={(e) => setTinggiProduct(e.target.value)}
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
