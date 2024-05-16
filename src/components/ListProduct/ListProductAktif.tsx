import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import ProductCardActive from "./component/ProductCard";

const ListProductAktif = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ProductCardActive />
    </Box>
  );
};

export default ListProductAktif;
