import React, { useState } from "react";
import Informasi from "../features/FormNewProduct/component/informasi";
import { Box, Button, Container, FormLabel, Typography } from "@mui/material";
import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";

import DetailProduct from "../features/FormNewProduct/component/detailProduct";
import HargaPengelolaan from "../features/FormNewProduct/component/hargaPengelolaan";
import Pengiriman from "../features/FormNewProduct/component/pengiriman";

const FormNewProduct = () => {
  const [isValid, setIsValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isPhotoValid, setIsPhotoValid] = useState(false);

  const handleSave = () => {
    if (!isValid) {
      alert("Form belum valid. Silakan lengkapi data dengan benar.");
      return;
    }

    // Simpan data jika form valid
    // ...
  };

  return (
    <Container>
      <Informasi />
      <DetailProduct
        isDescriptionValid={isDescriptionValid}
        setIsDescriptionValid={setIsDescriptionValid}
        isPhotoValid={isPhotoValid}
        setIsPhotoValid={setIsPhotoValid}
        setIsValid={setIsValid}
      />
      <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#CECECE"}>
        <Typography variant="h6" color={"black"} gutterBottom>
          Varian Produk
        </Typography>
        <FormLabel>
          Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!
        </FormLabel>
        <Button
          variant="outlined"
          style={{
            borderRadius: "20px",
            marginLeft: "50px",
            marginBottom: "10px",
            color: "black",
            borderColor: "black",
            backgroundColor: "white",

            // "&:hover": {
            //   borderColor: "black",
            // },
          }}
        >
          <AddCircleOutlineIcon
            sx={{
              fontSize: 30,
              marginRight: "5px",
            }}
          />
          Tambah
        </Button>
      </Box>
      <HargaPengelolaan />
      <Pengiriman />
      <Box
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        display="flex"
        mt={"20px"}
        p={2}
        borderRadius={"10px"}
        bgcolor={"#CECECE"}
      >
        <Button
          variant="outlined"
          style={{
            marginLeft: "8px",
            borderRadius: "20px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Batal
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: "15px", borderRadius: "20px" }}
          onClick={handleSave}
        >
          Simpan
        </Button>
      </Box>
    </Container>
  );
};

export default FormNewProduct;
