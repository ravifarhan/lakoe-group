import { Box, Button, Input, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ActiveProduct = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [price, setprice] = React.useState("");
  console.log(price);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: "120px",
          height: "25px",
          borderRadius: "20px",
          border: "1px #909090 solid",
          textTransform: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Ubah Harga
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography variant="h6" fontWeight={"bold"}>
              Ubah Harga
            </Typography>
          </Box>
          <Box marginTop={"10px"}>
            <Typography>
              Ubah harga untuk produk KAOS BASIC POLOS - BUBLE GUM COMBED
              BIOWASH 30s Kaos Polos - S
            </Typography>
          </Box>
          <Box
            display={"flex"}
            width={"400px"}
            height={"40px"}
            border={"#e8e8e8 1px solid"}
            borderRadius={"10px"}
            marginTop={"10px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"50px"}
              bgcolor={"#f8f8f8"}
              borderRadius={"10px 0px 0px 10px"}
            >
              <Typography fontWeight={"bold"}>Rp.</Typography>
            </Box>
            <Box width={"350px"}>
              <Input
                sx={{ width: "350px", height: "40px" }}
                inputProps={{ underline: "false" }}
                onChange={(e) => setprice(e.target.value)}
              ></Input>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"end"} marginTop={"10px"}>
            <Box>
              <Button
                sx={{
                  width: "90px",
                  height: "30px",
                  color: "black",
                  borderRadius: "15px",
                  textTransform: "none",
                  bgcolor: "white",
                  border: "#b7b7b7 1px solid",
                  marginRight: "8px",
                }}
                onClick={handleClose}
              >
                Batalkan
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  width: "90px",
                  height: "30px",
                  color: "white",
                  borderRadius: "15px",
                  textTransform: "none",
                  bgcolor: "#0086b4",
                }}
              >
                Simpan
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ActiveProduct;
