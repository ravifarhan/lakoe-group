import React from "react";
import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import ProductCard from "./component/ProductCard";

const ListProductAktif = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ProductCard />
    </Box>
  );
};

export default ListProductAktif;
