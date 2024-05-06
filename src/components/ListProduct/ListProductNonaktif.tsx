import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import ProductCardNonActive from "./component/ProductCardNonActive";

const ListProductNonaktif = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ProductCardNonActive />
    </Box>
  );
};

export default ListProductNonaktif;
