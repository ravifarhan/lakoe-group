import {
  Avatar,
  Box,
  InputAdornment,
  StyledEngineProvider,
  TextField,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";
import TotalProducts from "./component/TotalProducts";
import TotalCustomers from "./component/TotalCustomers";
import TotalOrders from "./component/TotalOrders";
import TotalSales from "./component/TotalSales";
import { BarChart, LineChart } from "@mui/x-charts";
import { currentYear, lastYear, xLabels } from "./component/chart-helper";
import { getCurrentUser } from "../../lib/API/call/auth";
import { useEffect, useState } from "react";
import { ICurrentUser } from "../../types";

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>({
    sub: "",
    username: "",
    email: "",
    phone: "",
  })

  const getUser = async () => {
    try {
      const res = await getCurrentUser()
      setCurrentUser(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
        boxShadow={4}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Typography className="title">
            Hello, {currentUser?.username} &#x1F44B;
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Box
            sx={{
              bgcolor: "#f6f4ff",
              p: 1,
              borderRadius: "155px",
              width: "500px",
            }}
          >
            <TextField
              id="search"
              placeholder={`Search your products`}
              variant="standard"
              fullWidth
              InputLabelProps={{ shrink: false }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <NotificationsIcon
              sx={{ width: 30, height: 30, color: "GrayText" }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 50, height: 50 }}
            />
            <Typography className="title">{currentUser?.username}</Typography>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} color={"black"} padding={4} gap={4}>
        <TotalCustomers />
        <TotalProducts />
        <TotalOrders />
        <TotalSales />
      </Box>
      <Box display={"flex"} p={4}>
        <Box bgcolor={"#f7f5ff"} flex={2.5}>
          <LineChart
            height={350}
            series={[
              { data: currentYear, label: "Current Year", color: "#ac92fd" },
              { data: lastYear, label: "Last Year", color: "#fa2833" },
            ]}
            xAxis={[{ scaleType: "band", data: xLabels }]}
          />
        </Box>
        <Box flex={1}>
          T
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={500}
            height={300}
          />
        </Box>
      </Box>
    </StyledEngineProvider>
  );
}
