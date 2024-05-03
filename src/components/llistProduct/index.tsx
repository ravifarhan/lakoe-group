import { Box, Button, Checkbox, Switch, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import SettingsIcon from "@mui/icons-material/Settings";
import ModalPrice from "../ModalPrice";
import ModalStock from "../ModalStock";
import CardProductBihaviour from "../CardProductBihaviour";
import { Link } from "react-router-dom";

const ListProduct = () => {
  return (
    <Box display={"flex"} border={"1px #e6e4e5 solid"} borderRadius={"10px"}>
      <Box padding={"5px"}>
        <img
          width={"80px"}
          height={"80px"}
          src="https://i.pinimg.com/564x/53/51/44/535144c13648b5be65ba57b81d396f36.jpg"
          alt="tshirt"
        />
      </Box>
      <Box marginLeft={"10px"} marginTop={"6px"}>
        <Box fontWeight={"bold"} sx={{ fontSize: "15px" }}>
          <Typography
            sx={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
          >
            KAOS BASIC COTTON KENARI - BRONZE GREEN [ COTTON COMBED 30S ]
          </Typography>
        </Box>
        <Box display={"flex"} color={"black"}>
          <Box>
            <Typography fontWeight={"bold"}>Rp. 80.000</Typography>
          </Box>
          <Box marginLeft={"10px"} color={"#909090"}>
            <Typography>Stok: 20</Typography>
          </Box>
          <Box marginLeft={"10px"} color={"#909090"}>
            <Typography>SKU: 0219AKD192</Typography>
          </Box>
        </Box>
        <Box display={"flex"} marginTop={"3px"} gap={1}>
          <Box>
            <ModalPrice />
          </Box>
          <Box>
            <ModalStock />
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
              Lihat Halaman
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9999px",
              border: "1px #909090 solid",
              color: "black",
            }}
          >
            <Link to={""}>
              <CardProductBihaviour />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"end"} width={"100px"}>
        <Box>
          <Box display={"flex"} justifyContent={"end"}>
            <Checkbox />
          </Box>
          <Box marginTop={"10px"}>
            <Switch defaultChecked />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListProduct;
