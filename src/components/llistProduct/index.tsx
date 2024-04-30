import { Box, Button, Checkbox, Switch, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";

const ListProduct = () => {
  return (
    <Box
      display={"flex"}
      width={"720px"}
      marginTop={"10px"}
      border={"1px #e6e4e5 solid"}
      borderRadius={"10px"}
    >
      <Box padding={"5px"}>
        <img
          width={"80px"}
          height={"80px"}
          src="https://i.pinimg.com/564x/53/51/44/535144c13648b5be65ba57b81d396f36.jpg"
          alt="tshirt"
        />
      </Box>
      <Box width={"80%"} marginLeft={"10px"} marginTop={"5px"}>
        <Box fontWeight={"bold"} sx={{ fontSize: "15px" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }} />
          KAOS BASIC COTTON KENARI - BRONZE GREEN [ COTTON COMBED 30S ]
        </Box>
        <Box display={"flex"} marginTop={"6px"}>
          <Box>Rp. 80.000</Box>
          <Box marginLeft={"10px"} color={"#909090"}>
            Stok: 20
          </Box>
          <Box marginLeft={"10px"} color={"#909090"}>
            SKU: 0219AKD192
          </Box>
        </Box>
        <Box display={"flex"} marginTop={"10px"}>
          <Box>
            <Button
              sx={{
                width: "120px",
                height: "25px",
                borderRadius: "20px",
                border: "1px #909090 solid",
                textTransform: "none",
                color: "black",
              }}
            >
              Ubah Harga
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                width: "120px",
                height: "25px",
                borderRadius: "20px",
                border: "1px #909090 solid",
                textTransform: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Ubah Stok
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                width: "140px",
                height: "25px",
                borderRadius: "20px",
                border: "1px #909090 solid",
                textTransform: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Lihat Halaman
            </Button>
          </Box>
          {/* <Box>
            <Button
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                border: "1px #e2e2e2 solid",
                bgcolor: "red",
                color: "black",
              }}
            >
              4
            </Button>
          </Box> */}
        </Box>
      </Box>
      <Box>
        <Box>
          <Checkbox />
        </Box>
        <Box marginTop={"10px"}>
          <Switch defaultChecked />
        </Box>
      </Box>
    </Box>
  );
};

export default ListProduct;
