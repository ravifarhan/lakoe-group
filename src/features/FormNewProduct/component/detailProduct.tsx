import React, { useState } from "react";
import { Box, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductValidation, {
  ITestForm,
} from "../../../lib/hook/validation/useProductValidation";

const DetailProduct = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { reset, control, handleSubmit } = useProductValidation();

  const submitHandler: SubmitHandler<ITestForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
    alert("error" + JSON.stringify(data, null, 2));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const files = event.target.files;
    if (files) {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[index] = files[0];
      setSelectedFiles(newSelectedFiles);
    }
  };

  return (
    <Box sx={{ mt: 2, p: 2 }} borderRadius={"12px"} bgcolor={"#ffffff"}>
      <Typography variant="h6" color={"black"} gutterBottom>
        Detail Produk
      </Typography>

      <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Deskripsi<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              control={control}
              name="deskripsi"
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  placeholder="Masukan deskripsi lengkap produk kamu"
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Foto Produk<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Grid container spacing={1} sx={{ flexDirection: "row" }}>
              {[...Array(5)].map((_, index) => (
                <Grid item key={index}>
                  <input
                    accept="image/*"
                    id={`contained-button-file-${index}`}
                    multiple
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleFileChange(event, index)}
                  />
                  <label htmlFor={`contained-button-file-${index}`}>
                    <div>
                      <img
                        src={
                          selectedFiles[index]
                            ? URL.createObjectURL(selectedFiles[index])
                            : "./src/assets/img.jpeg"
                        }
                        alt={`Upload Image ${index + 1}`}
                        style={{
                          cursor: "pointer",
                          width: "135px",
                          height: "auto",
                        }}
                      />
                    </div>
                  </label>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default DetailProduct;
