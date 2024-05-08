import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Box, Typography } from "@mui/material";

const TotalOrders = () => {
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
        <Box bgcolor={"#ffdada"} p={1}>
          <ReceiptLongIcon sx={{ color: "#ff2229", width: 30, height: 30 }} />
        </Box>
        <Box>
          <Typography className="title" textAlign={"start"}>
            1600+
          </Typography>
          <Typography variant="body2">Total Orders</Typography>
        </Box>
      </Box>
    </>
  );
};

export default TotalOrders;
