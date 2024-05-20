import { Box, Tab, Typography } from "@mui/material";
import "./index.css";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ListOrderAll from "./component/ListOrderAll";
import SearchOrders from "./component/SearchOrders";
import SelectCourier from "./component/SelectCourier";
import SortingOrders from "./component/SortingOrders";
import ListToPay from "./component/ListToPay";
import ListNewOrder from "./component/ListNewOrder";
import ListReadyToPickup from "./component/ListReadyToPickup";
import ListInDelivery from "./component/ListInDelivery";
import ListDelivered from "./component/ListDelivered";
import ListOrderCanceled from "./component/ListOrderCanceled";

const Orders = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ color: "black", fontSize: "x-large", fontWeight: "bolder" }}
        >
          Daftar Pesanan
        </Typography>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto" >
              <Tab label="Semua" value="1" sx={{ color: 'black', fontWeight: 'bolder' }} />
              <Tab label="Belum Dibayar" value="2" sx={{ color: 'black', fontWeight: 'bolder' }} />
              <Tab label="Pesanan Baru" value="3" sx={{ color: 'black', fontWeight: 'bolder' }} />
              <Tab label="Siap Dikirim" value="4" sx={{ color: 'black', fontWeight: 'bolder' }} />
              <Tab label="Dalam Pengiriman" value="5" sx={{ color: 'black', fontWeight: 'bolder' }} />
              <Tab label="Pesanan Selesai" value="6" sx={{ color: 'black', fontWeight: 'bolder' }} />
              <Tab label="DIbatalkan" value="7" sx={{ color: 'black', fontWeight: 'bolder' }} />
            </TabList>
          </Box>
          <Box p={3} display={"flex"} gap={5}>
            <SearchOrders />
            <SelectCourier />
            <SortingOrders />
          </Box>
          <TabPanel value="1">
            <ListOrderAll />
          </TabPanel>
          <TabPanel value="2" sx={{ color: "black" }}>
            <ListToPay />
          </TabPanel>
          <TabPanel value="3">
            <ListNewOrder />
          </TabPanel>
          <TabPanel value="4">
            <ListReadyToPickup />
          </TabPanel>
          <TabPanel value="5">
            <ListInDelivery />
          </TabPanel>
          <TabPanel value="6">
            <ListDelivered />
          </TabPanel>
          <TabPanel value="7">
            <ListOrderCanceled />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Orders;
