import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormLabel,
} from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductValidation, {
  ITestForm,
} from "../../../lib/hook/validation/useProductValidation";

const HargaPengelolaan = () => {
  const { reset, control, handleSubmit } = useProductValidation();

  const submitHandler: SubmitHandler<ITestForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
    alert("error" + JSON.stringify(data, null, 2));
  };

  const [minProduct, setMinProduct] = useState(""); // State untuk menyimpan minimal pembelian
  const [sku, setSku] = useState(""); // State untuk menyimpan SKU

  return (
    <>
      <Box
        sx={{ mt: 2, p: 2 }}
        borderRadius={"8px"}
        flexDirection={"row"}
        bgcolor={"#ffffff"}
      >
        <Typography variant="h6" color={"black"} gutterBottom>
          Harga
        </Typography>

        <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormLabel component="legend">
                Harga <span style={{ color: "red" }}>*</span>
              </FormLabel>

              <Controller
                control={control}
                name="harga"
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Nama Produk"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ color: "black" }}
                        >
                          Rp{" "}
                        </InputAdornment>
                      ),
                    }}
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Minimal Pembelian</FormLabel>
              <TextField
                fullWidth
                type="number"
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

      <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#ffffff"}>
        <Typography variant="h6" color="black" gutterBottom>
          Pengelolaan Produk
        </Typography>

        <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">
                Stok Produk<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Controller
                control={control}
                name="stok_produk"
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Masukan Nama Produk"
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">
                SKU (Stock Keeping Unit)<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                fullWidth
                type="number"
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
