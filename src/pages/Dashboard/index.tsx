import {
  Avatar,
  Box,
  InputAdornment,
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

const lastYear = [
  40000, 30000, 20000, 27800, 18900, 23900, 34900, 38000, 39008, 48000, 38000,
  43000,
];
const currentYear = [
  24000, 13980, 58000, 39008, 48000, 38000, 43000, 27800, 18900, 23900, 34900,
  38000,
];
const xLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Dashboard() {
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
            Hello, Sutan Arief &#x1F44B;
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
            <Typography className="title">Sutan Arief</Typography>
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
            T
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["group A", "group B", "group C"],
                },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              height={300}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
