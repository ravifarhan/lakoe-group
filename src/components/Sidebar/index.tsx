import { Box, Typography } from "@mui/material";
import {
  AccountCircleOutlined,
  HomeOutlined,
  Inventory2Outlined,
  Settings,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth";

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
    >
      <Box display={"flex"} flexDirection={"column"} mt={3} padding={4} gap={3}>
        <Box sx={{ display: "flex" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <HomeOutlined sx={{ color: "black" }} />
            <Typography variant="body1" color={"black"}>
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            to="/product-management"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Inventory2Outlined sx={{ color: "black" }} />
            <Typography variant="body1" color={"black"}>
              Produk
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            to="/orders"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ShoppingBagOutlined sx={{ color: "black" }} />
            <Typography variant="body1" color={"black"}>
              Pesanan
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            to="/setting"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Settings sx={{ color: "black" }} />
            <Typography variant="body1" color={"black"}>
              Pengaturan
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} padding={4} gap={3}>
        <Box onClick={handleLogout} sx={{ display: "flex", gap: "8px", cursor: "pointer", width: "fit-content"}}>
          <AccountCircleOutlined sx={{ color: "black" }} />
          <Typography variant="body1" color={"black"}>
            Profile
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
