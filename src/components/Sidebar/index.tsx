import { Box, ListItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  AccountCircle,
  Inventory,
  Settings,
  ShoppingBag,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      position={"fixed"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
    >
      <Box display={"flex"} flexDirection={"column"} mt={3}>
        <Link to="/dashboard">
          <ListItem
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <HomeIcon style={{ fontSize: 25 }} />
            Dashboard
          </ListItem>
        </Link>
        <Link to={"product-management"}>
          <ListItem
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <Inventory style={{ fontSize: 25 }} />
            Produk
          </ListItem>
        </Link>
        <Link to="/orders">
          <ListItem
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <ShoppingBag style={{ fontSize: 25 }} />
            Pesanan
          </ListItem>
        </Link>
        <Link to="setting">
          <ListItem
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <Settings style={{ fontSize: 25 }} />
            Pengaturan
          </ListItem>
        </Link>
      </Box>
      <Box>
        <Link to="#">
          <ListItem
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 2,
              pb: 10,
            }}
          >
            <AccountCircle />
            Profile
          </ListItem>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
