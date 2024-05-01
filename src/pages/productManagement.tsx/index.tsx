import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Grid, Tab, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchProduct from "../../components/searchProduct";
import ListProduct from "../../components/llistProduct";

const ProductManagement = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box width={"100%"}>
      <Box display={"flex"} alignItems={"center"} padding={"15px"}>
        <Box>
          <Typography
            width={"200px"}
            variant="h6"
            fontWeight={"bold"}
            color={"black"}
          >
            Daftar Produk
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          bgcolor={"#0086b4"}
          sx={{
            marginLeft: "47%",
          }}
        >
          <Button
            sx={{
              width: "150px",
              color: "white",
              textTransform: "none",
            }}
          >
            <ControlPointIcon />
            Tambah Produk
          </Button>
        </Box>
      </Box>
      <Box>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginBottom: "15px",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                sx={{ textTransform: "none", color: "black" }}
                label="Semua"
                value="1"
              />
              <Tab
                sx={{ textTransform: "none", color: "black" }}
                label="Aktif"
                value="2"
              />
              <Tab
                sx={{ textTransform: "none", color: "black" }}
                label="Nonaktif"
                value="3"
              />
            </TabList>
          </Box>
          {/* <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
      <Box>
        <SearchProduct />
      </Box>
      <Box>
        <ListProduct />
      </Box>
    </Box>
  );
};

export default ProductManagement;
