import { FmdGoodOutlined, LocationOffOutlined } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import {  useState } from "react";
import ModalDialog from "../ModalPanel";
import FormAddLocation from "./components/FormAddLocation";
import ButtonEditDelete from "./components/ButtonEditDelete";

const PanelLocation = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  

  return (
    <>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="body1" fontWeight="bold">
            Lokasi Toko
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            Alamat ini akan digunakan sebagai alamat pengirimanmu
          </Typography>
        </Box>
        <ModalDialog callback={toggleModal} show={showModal}>
          <FormAddLocation callback={toggleModal} />
        </ModalDialog>
        <Button
          onClick={toggleModal}
          variant="contained"
          size="small"
          sx={{
            width: "120px",
            height: "30px",
            color: "black",
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "transparent",
            },
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Tambah Lokasi
        </Button>
      </Box>
      <Box
        display={"flex"}
        gap={1}
        mt={2}
        border={"1px solid #e6e4e5"}
        borderRadius={"10px"}
        padding={1}
      >
        <Box flex={0.7} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="body2">Nama Lokasi</Typography>
          <Typography variant="body2">Alamat</Typography>
          <Typography variant="body2">Kota/Kecamatan</Typography>
          <Typography variant="body2">Kode Pos</Typography>
          <Typography variant="body2">Pinpoint</Typography>
        </Box>
        <Box flex={2} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="body2" fontWeight={"bold"}>
            Fesyen Store{" "}
            <span
              style={{
                color: "white",
                backgroundColor: "#008f5d",
                padding: "3px",
                borderRadius: "5px",
              }}
            >
              Alamat Utama
            </span>
          </Typography>
          <Typography variant="body2">
            Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
          </Typography>
          <Typography variant="body2">
            Kota Tangerang Selatan, Kec. Ciputat
          </Typography>
          <Typography variant="body2">15413</Typography>
          <Typography
            variant="body2"
            sx={{ color: "#0086b4", display: "flex", alignItems: "center" }}
          >
            <FmdGoodOutlined sx={{ marginRight: "5px" }} fontSize="small" />{" "}
            Sudah Pinpoint
          </Typography>
        </Box>
        <ButtonEditDelete />
      </Box>
      <Box
        display={"flex"}
        gap={1}
        mt={2}
        border={"1px solid #e6e4e5"}
        borderRadius={"10px"}
        padding={1}
      >
        <Box flex={0.7} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="body2">Nama Lokasi</Typography>
          <Typography variant="body2">Alamat</Typography>
          <Typography variant="body2">Kota/Kecamatan</Typography>
          <Typography variant="body2">Kode Pos</Typography>
          <Typography variant="body2">Pinpoint</Typography>
        </Box>
        <Box flex={2} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="body2" fontWeight={"bold"}>
            Fesyen Store 2
          </Typography>
          <Typography variant="body2">
            Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
          </Typography>
          <Typography variant="body2">
            Kota Tangerang Selatan, Kec. Ciputat
          </Typography>
          <Typography variant="body2">15413</Typography>
          <Typography
            variant="body2"
            sx={{ color: "#909090", display: "flex", alignItems: "center" }}
          >
            <LocationOffOutlined sx={{ marginRight: "5px" }} fontSize="small" />{" "}
            Belum Pinpoint
          </Typography>
        </Box>
        <ButtonEditDelete />
      </Box>
    </>
  );
};

export default PanelLocation;
