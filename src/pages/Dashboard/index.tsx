import {
  Avatar,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import TotalProducts from "./component/TotalProducts";
import TotalCustomers from "./component/TotalCustomers";
import TotalOrders from "./component/TotalOrders";
import TotalSales from "./component/TotalSales";
import { BarChart, LineChart } from "@mui/x-charts";
import { currentYear, dataChart, lastYear, xLabels } from "./component/chart-helper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchCurrentUser } from "../../store/asyncthunk/user";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, []);



  return (
    <>
      <Box margin={"20px"} borderRadius={"10px"} boxShadow={2} bgcolor={"white"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          // bgcolor={"white"}
          borderBottom={"2px solid #f6f4ff"}
        >
          <Typography className="title">
            Hello, {user.username} &#x1F44B;
          </Typography>
          <Box
            sx={{
              bgcolor: "#f6f4ff",
              p: 1,
              borderRadius: "100px",
              width: "50%",
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
            <Typography className="title">{user.username}</Typography>
          </Box>
        </Box>
        <Box display={"flex"} padding={1} gap={1}>
          <TotalCustomers />
          <TotalProducts />
          <TotalOrders />
          <TotalSales />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={4}
          justifyContent={"center"}
        >
          <Box>
            <LineChart
              height={350}
              series={[
                {
                  data: currentYear,
                  label: "Current Year",
                  color: "#ac92fd",
                },
                { data: lastYear, label: "Last Year", color: "#fa2833" },
              ]}
              xAxis={[{ scaleType: "band", data: xLabels }]}
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: xLabels,
                },
              ]}
              series={dataChart}
              height={300}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
