import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import RightBar from "../components/Rightbar";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        // color: "#F8F8F8",
      }}
    >
      <Box flex={1}>
        <Sidebar />
      </Box>
      <Box
        flex={3}
        sx={{
          bgcolor: "#f8f8f8",
          overflowY: "auto",
          borderLeft: "1.5px solid #e6e6e6",
          borderRight: "1.5px solid #e6e6e6",
          scrollbarWidth: "none",
          // border: "1px solid black",
          // borderRadius: "20px",
        }}
      >
        <Outlet />
      </Box>
      <Box flex={1} sx={{ padding: "20px" }}>
        <RightBar />
      </Box>
    </Box>
  );
};

export default MainLayout;
