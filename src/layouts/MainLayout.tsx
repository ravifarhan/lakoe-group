import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { ReactNode } from "react";
import RightBar from "../components/Rightbar";

export default function MainLayout({ children }: { children: ReactNode }) {
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
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
      <Box flex={1} sx={{ padding: "20px" }}>
        <RightBar />
      </Box>
    </Box>
  );
}
