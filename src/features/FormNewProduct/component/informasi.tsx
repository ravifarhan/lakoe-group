import {
  TextField,
  Grid,
  MenuItem,
  InputAdornment,
  Typography,
  FormLabel,
  Box,
} from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductValidation, {
  ITestForm,
} from "../../../lib/hook/validation/useProductValidation";

const Informasi = () => {
  // const [productName, setProductName] = useState("");
  // const [productUrl, setProductUrl] = useState("");
  // const [productCategory, setProductCategory] = useState("");
  const { reset, control, handleSubmit } = useProductValidation();

  const submitHandler: SubmitHandler<ITestForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
    alert("error" + JSON.stringify(data, null, 2));
  };

  return (
    <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#ffffff"}>
      <Typography variant="h6" color={"black"} gutterBottom>
        Informasi Produk
      </Typography>

      <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Nama Produk<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              control={control}
              name="nama_produk"
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  placeholder="Masukan Nama Produk"
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                  // value={productName}
                  // onChange={(e) => setProductName(e.target.value)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">
              URL Halaman Checkout<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              control={control}
              name="url"
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  placeholder="Nama Produk"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "black" }}>
                        lakoe.store/
                      </InputAdornment>
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

          <Grid item xs={12}>
            <FormLabel component="legend">
              Kategori<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              control={control}
              name="kategori"
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  placeholder="Masukan Kategori"
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  // value={productCategory}
                  // onChange={(e) => setProductCategory(e.target.value)}
                >
                  <MenuItem value="">Pilih Kategori</MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Clothing">Clothing</MenuItem>
                  <MenuItem value="Books">Books</MenuItem>
                  <MenuItem value="Home & Kitchen">Home & Kitchen</MenuItem>
                </TextField>
              )}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Informasi;
