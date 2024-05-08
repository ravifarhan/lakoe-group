import { Box, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const TotalProducts = () => {
  return (
    <>
      <Box
        width={"40%"}
        p={1}
        bgcolor={"#f7f5ff"}
        display={"flex"}
        gap={1}
        alignItems={"center"}
        borderRadius={"10px"}
        boxShadow={2}
        sx={{ cursor: "pointer" }}
      >
        <Box bgcolor={"#ffefdb"} p={1}>
          <ShoppingBasketIcon
            sx={{ color: "#ffc955", width: 30, height: 30 }}
          />
        </Box>
        <Box>
          <Typography className="title" textAlign={"start"}>
            140+
          </Typography>
          <Typography variant="body2">Total Products</Typography>
        </Box>
      </Box>
    </>
  );
};

export default TotalProducts;
