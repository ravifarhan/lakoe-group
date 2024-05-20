import { Box, Typography } from "@mui/material";
import {
  AccountCircleOutlined,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const Menu = [
  {
    name: "Dashboard",
    path: "/",
    icon: {
      active: (
        <img src="../../src/assets/home2.svg" alt="home" className="icon" />
      ),
      unActive: (
        <img src="../../src/assets/home.svg" alt="home" className="icon" />
      ),
    },
  },
  {
    name: "Product",
    path: "/product-management",
    icon: {
      active: (
        <img src="../../src/assets/box2.svg" alt="home" className="icon" />
      ),
      unActive: (
        <img src="../../src/assets/box.svg" alt="home" className="icon" />
      ),
    },
  },
  {
    name: "Pesanan",
    path: "/orders",
    icon: {
      active: (
        <img src="../../src/assets/bag2.svg" alt="home" className="icon" />
      ),
      unActive: (
        <img src="../../src/assets/bag.svg" alt="home" className="icon" />
      ),
    },
  },
  {
    name: "Setting",
    path: "/setting",
    icon: {
      active: (
        <img src="../../src/assets/setting2.svg" alt="home" className="icon" />
      ),
      unActive: (
        <img src="../../src/assets/setting.svg" alt="home" className="icon" />
      ),
    },
  },
];

const Sidebar = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
    >
      <Box display={"flex"} flexDirection={"column"} mt={3} padding={4} gap={3}>
        {Menu.map((item, index) => (
          <Box key={index} sx={{ display: "flex", marginBottom: "10px" }}>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: isActive ? "#0086b4" : "black",
              })}
            >
              {({ isActive }) => (
                <>
                  {isActive ? item.icon.active : item.icon.unActive}
                  <Typography variant="body1" fontWeight="bold">
                    {item.name}
                  </Typography>
                </>
              )}
            </NavLink>
          </Box>
        ))}
      </Box>

      <Box display={"flex"} flexDirection={"column"} padding={4} gap={3}>
        <Box sx={{ display: "flex" }}>
          <Link
            to="#"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <AccountCircleOutlined sx={{ color: "black" }} />
            <Typography variant="body1" color={"black"}>
              Profile
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
