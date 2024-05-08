import { Box, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

const TotalCustomers = () => {
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
        <Box bgcolor={"#e3e0ff"} p={1}>
          <GroupsIcon sx={{ color: "#a78fed", width: 30, height: 30 }} />
        </Box>
        <Box>
          <Typography className="title" textAlign={"start"}>
            2000+
          </Typography>
          <Typography variant="body2">Total Customers</Typography>
        </Box>
      </Box>
    </>
  );
};

export default TotalCustomers;
