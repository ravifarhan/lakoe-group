import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Checkbox, Tab, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchProduct from "../../components/searchProduct";
import ListProductAktif from "../../components/ListProduct/ListProductAktif";
import ListProductNonaktif from "../../components/ListProduct/ListProductNonaktif";
import ListSortCategory from "../../components/ListSortCategory";
import ListSortProduct from "../../components/ListSortProduct";
import ModalDelete from "../../features/ModalDelete";

const ProductManagement = () => {
  const [value, setValue] = React.useState("1");

  const [selectAll, setSelectAll] = React.useState(false);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(event.target.checked);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box padding={"10px"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"15px"}
        sx={{ overflow: "none" }}
      >
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
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                label="Semua"
                value="1"
              />
              <Tab
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                label="Aktif"
                value="2"
              />
              <Tab
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                label="Nonaktif"
                value="3"
              />
            </TabList>
          </Box>
          <Box display={"flex"} alignItems={"center"} marginTop={"10px"}>
            <SearchProduct />
            <ListSortCategory />
            <ListSortProduct />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography fontWeight={"bold"} color={"black"}>
                1 Pesanan
              </Typography>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
              gap={1}
            >
              {selectAll && (
                <Box
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Box>
                    <ModalDelete />
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        height: "25px",
                        borderRadius: "20px",
                        border: "1px #909090 solid",
                        textTransform: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Nonaktifkan Produk
                    </Button>
                  </Box>
                </Box>
              )}

              <Box display={"flex"} alignItems={"center"}>
                <Typography color={"black"}>Pilih Semua</Typography>
                <Checkbox checked={selectAll} onChange={handleSelectAll} />
              </Box>
            </Box>
          </Box>
          <Box mt={-3}>
            <TabPanel value="1">
              <ListProductAktif />
              <ListProductNonaktif />
            </TabPanel>
            <TabPanel value="2">
              <ListProductAktif />
            </TabPanel>
            <TabPanel value="3">
              <ListProductNonaktif />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default ProductManagement;
