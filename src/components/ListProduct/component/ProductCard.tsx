import React from "react";
import { Box, Button, Checkbox, Switch, Typography } from "@mui/material";
import ModalPrice from "../../../features/ModalPrice";
import ModalStock from "../../../features/ModalStock";
import { Link } from "react-router-dom";
import CardProductBihaviour from "../../../features/CardProductBihaviour";
import DummyProduct from "../../Dummy/Product.json";

const ProductCard = () => {
  return (
    <Box>
      {DummyProduct.map((dummy) => (
        <Box
          display={"flex"}
          border={"1px #e6e4e5 solid"}
          borderRadius={"10px"}
          marginTop={"10px"}
          marginBottom={"10px"}
        >
          <Box padding={"5px"}>
            <img
              width={"80px"}
              height={"80px"}
              src={dummy.image}
              alt="tshirt"
            />
          </Box>
          <Box width={"500px"} marginLeft={"10px"} marginTop={"6px"}>
            <Box fontWeight={"bold"} sx={{ fontSize: "15px" }}>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
              >
                {dummy.nameProduct}
              </Typography>
            </Box>
            {/* <Box width={"100px"}>{DummyProduct1.nameProduct}</Box> */}
            <Box display={"flex"} color={"black"}>
              <Box>
                <Typography fontWeight={"bold"}>{dummy.Harga}</Typography>
              </Box>
              <Box marginLeft={"10px"} color={"#909090"}>
                <Typography>Stok: {dummy.Stok}</Typography>
              </Box>
              <Box marginLeft={"10px"} color={"#909090"}>
                <Typography>SKU: {dummy.SKU}</Typography>
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
                <Switch checked={dummy.isChecked} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProductCard;
