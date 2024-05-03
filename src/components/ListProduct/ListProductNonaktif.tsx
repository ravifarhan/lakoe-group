import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import ProductCard from "./component/ProductCard";

const ListProductNonaktif = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ProductCard />
    </Box>
  );
};

export default ListProductNonaktif;
