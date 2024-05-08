import { Box, Typography } from "@mui/material";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";

const TotalSales = () => {
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
        <Box bgcolor={"#ddefe1"} p={1} borderRadius={"10px"}>
          <StackedLineChartIcon
            sx={{ color: "#54b475", width: 30, height: 30 }}
          />
        </Box>
        <Box>
          <Typography className="title" textAlign={"start"}>
            2000+
          </Typography>
          <Typography variant="body2">Total Sales</Typography>
        </Box>
      </Box>
    </>
  );
};

export default TotalSales;
