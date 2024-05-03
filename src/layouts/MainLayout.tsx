import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/Rightbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#FFFFFF",
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
          "&::-webkit-scrollbar": {
            display: "none",
          },
          borderLeft: "1.5px solid #e6e6e6",
          borderRight: "1.5px solid #e6e6e6",
          scrollbarWidth: "none"
        }}
      >
        <Outlet />
      </Box>
      <Box flex={1} sx={{ padding: "20px" }}>
        <RightBar />
      </Box>
    </Box>
  );
}