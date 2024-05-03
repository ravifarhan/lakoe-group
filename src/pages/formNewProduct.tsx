import { useState } from "react";
import Informasi from "../features/FormNewProduct/component/informasi";
import { Box, Button, Container, FormLabel, Typography } from "@mui/material";
import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";
// import NestedList from "../features/FormNewProduct/component/NestedList";

import DetailProduct from "../features/FormNewProduct/component/detailProduct";
import HargaPengelolaan from "../features/FormNewProduct/component/hargaPengelolaan";
import Pengiriman from "../features/FormNewProduct/component/pengiriman";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductValidation, {
  ITestForm,
} from "../lib/hook/validation/useProductValidation";

const FormNewProduct = () => {
  const { reset, handleSubmit } = useProductValidation();

  const submitHandler: SubmitHandler<ITestForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
    alert("error" + JSON.stringify(data, null, 2));
  };

  return (
    <Container
      sx={{
        bgcolor: "#f8f8f8",
      }}
    >
      <Informasi />
      <DetailProduct />

      <Box sx={{ mt: 2, p: 2 }} borderRadius={"8px"} bgcolor={"#ffffff"}>
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
        bgcolor={"#ffffff"}
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
          onClick={handleSubmit(submitHandler, handleSubmitError)}
        >
          Simpan
        </Button>
      </Box>
    </Container>
  );
};

export default FormNewProduct;
