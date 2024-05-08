import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import ProductCardActive from "./component/ProductCard";
import ProductCardNonActive from "./component/ProductCardNonActive";

const ListProductAll = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ProductCardActive />
      <ProductCardNonActive />
    </Box>
  );
};

export default ListProductAll;
