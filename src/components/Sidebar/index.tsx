import { Box, ListItem, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  AccountCircle,
  Inventory,
  Settings,
  ShoppingBag,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box>
      <Link href="#" underline="none">
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
      <Link href="#" underline="none">
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
      <Link href="#" underline="none">
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
      <Link href="#" underline="none">
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
      <Link href="#" underline="none">
        <ListItem
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 50,
          }}
        >
          <AccountCircle />
          Profile
        </ListItem>
      </Link>
    </Box>
  );
};

export default Sidebar;
