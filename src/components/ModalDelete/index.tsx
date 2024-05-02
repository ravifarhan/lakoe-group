import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input, TextField } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

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

export default function ModalDelete() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "23px",
          height: "23px",
          borderRadius: "9999px",
          border: "1px #909090 solid",
          color: "black",
        }}
      >
        <Button onClick={handleOpen}>
          <DeleteForeverOutlinedIcon sx={{ width: "15px", height: "15px" }} />
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography variant="h6" fontWeight={"bold"}>
              Hapus Stok
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
            border={"#e8e8e8 1px solid"}
            borderRadius={"10px"}
            marginTop={"10px"}
          >
            <Box width={"350px"}>
              <Input
                sx={{ width: "400px", height: "40px" }}
                inputProps={{ underline: "false" }}
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
}
