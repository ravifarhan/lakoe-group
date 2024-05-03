import React, { useState } from "react";
import { Box, FormLabel, Grid, Typography } from "@mui/material";

interface DetailProductProps {
  setIsDescriptionValid: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPhotoValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailProduct: React.FC<DetailProductProps> = ({
  setIsDescriptionValid,
  setIsPhotoValid,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const files = event.target.files;
    if (files) {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[index] = files[0];
      setSelectedFiles(newSelectedFiles);

      // Validasi foto produk
      const validFiles = newSelectedFiles.filter((file) => file);
      setIsPhotoValid(validFiles.length > 0);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);

    // Validasi deskripsi produk
    setIsDescriptionValid(event.target.value.trim() !== "");
    setDescriptionError(
      event.target.value.trim() === "" ? "Deskripsi tidak boleh kosong" : null
    );
  };

  return (
    <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#CECECE"}>
      <Typography variant="h6" color={"black"} gutterBottom>
        Detail Produk
      </Typography>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Deskripsi<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <textarea
              aria-label="empty textarea"
              placeholder="Masukan deskripsi lengkap produk kamu"
              style={{
                width: "96%",
                minHeight: 100,
                padding: "8px 12px",
                fontSize: 16,
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              id="description"
            />
            {descriptionError && (
              <div style={{ color: "red" }}>{descriptionError}</div>
            )}
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Foto Produk<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Grid container spacing={3} sx={{ flexDirection: "row" }}>
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
                    <img
                      src={
                        selectedFiles[index]
                          ? URL.createObjectURL(selectedFiles[index])
                          : "./src/assets/img.jpeg"
                      }
                      alt={`Upload Image ${index + 1}`}
                      style={{
                        cursor: "pointer",
                        width: "100px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
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
