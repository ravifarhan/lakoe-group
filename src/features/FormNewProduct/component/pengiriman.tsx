import {
  Box,
  FormLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductValidation, {
  ITestForm,
} from "../../../lib/hook/validation/useProductValidation";

const Pengiriman = () => {
  const [panjangProduct, setPanjangProduct] = useState("");
  const [lebarProduct, setLebarProduct] = useState("");
  const [tinggiProduct, setTinggiProduct] = useState("");
  const {control, handleSubmit,reset} = useProductValidation()
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Berat Produk:", beratProduct);
  //   setBeratProduct("");
  //   console.log("Berat Produk:", beratProduct);
  //   setPanjangProduct("");
  //   console.log("Berat Produk:", beratProduct);
  //   setLebarProduct("");
  //   console.log("Berat Produk:", beratProduct);
  //   setTinggiProduct("");
  // };

  const submitHandler: SubmitHandler<ITestForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
    alert("error" + JSON.stringify(data, null, 2));
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

      <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Berat Produk <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              control={control}
              name="berat_produk"
              render={({ field, fieldState }) => (
            <TextField
              fullWidth
              type="berat_produk"
              variant="outlined"
              placeholder="Nama Produk"

              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Gram</InputAdornment>
                ),
              }}
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              // value={productUrl}
              // onChange={(e) => setProductUrl(e.target.value)}
            />
          )}
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
