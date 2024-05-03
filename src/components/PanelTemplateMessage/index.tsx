import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import ModalDialog from "../ModalPanel";
import FormAddTemplate from "./components/FormAddTemplate";
import ButtonEditDelete from "./components/ButtonEditDelete";

const PanelTemplateMessage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body1" fontWeight={"bold"}>
            Daftar Template Pesan
          </Typography>
          <ModalDialog callback={toggleModal} show={showModal}>
            <FormAddTemplate callback={toggleModal} />
          </ModalDialog>
          <Button
            onClick={toggleModal}
            variant="contained"
            size="small"
            sx={{
              width: "120px",
              height: "30px",
              backgroundColor: "#0086b4",
              ":hover": {
                backgroundColor: "#0086b4",
              },
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            Buat Template
          </Button>
        </Box>
        <Box
          display={"flex"}
          padding={1}
          border={"1px solid #e6e4e5"}
          borderRadius={"10px"}
          flexDirection={"column"}
          mt={2}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body2" fontWeight={"bold"}>
              Pesan Konfirmasi Pesanan
            </Typography>
            <ButtonEditDelete />
          </Box>
          <Box>
            <Typography variant="body2">
              Halo! Terima kasih telah berbelanja di Fesyen Store. Berikut
              rincian pesanan Anda:
            </Typography>
            <Typography variant="caption" component="div">
              <ul style={{ marginLeft: "20px" }}>
                <li>Nama Produk : [Nama Produk]</li>
                <li>Jumlah : [Jumlah Produk]</li>
                <li>
                  Total Harga : [Total Harga] Mohon konfirmasi pesanan Anda.
                  Terima kasih!
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          padding={1}
          border={"1px solid #e6e4e5"}
          borderRadius={"10px"}
          flexDirection={"column"}
          mt={2}
          gap={1}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body2" fontWeight={"bold"}>
              Pesan Pengiriman
            </Typography>
            <ButtonEditDelete />
          </Box>
          <Box>
            <Typography variant="body2">
              Hai, kami dari Fesyen Store. Pesanan Anda telah dikirimkan dengan
              nomor resi [Nomor Resi]. Anda dapat melacak pengiriman Anda
              melalui [Link Pelacakan]. Terima kasih telah berbelanja di toko
              kami!
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          padding={1}
          border={"1px solid #e6e4e5"}
          borderRadius={"10px"}
          flexDirection={"column"}
          mt={2}
          gap={1}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body2" fontWeight={"bold"}>
              Pesan Promo
            </Typography>
            <ButtonEditDelete />
          </Box>
          <Box>
            <Typography variant="body2">
              Hai! Fesyen Store sedang mengadakan promo spesial! Dapatkan diskon
              [Persentase Diskon]% untuk pembelian di atas [Jumlah Minimum
              Pembelian]. Segera kunjungi toko kami dan manfaatkan promo ini!
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          padding={1}
          border={"1px solid #e6e4e5"}
          borderRadius={"10px"}
          flexDirection={"column"}
          mt={2}
          gap={1}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body2" fontWeight={"bold"}>
              Pesan Pembayaran
            </Typography>
            <ButtonEditDelete />
          </Box>
          <Box>
            <Typography variant="body2">
              Halo, ini Fesyen Store. Pesanan Anda sudah siap. Mohon segera
              lakukan pembayaran sebesar [Total Pembayaran] ke [Nomor Rekening]
              a/n [Nama Pemilik Rekening]. Setelah pembayaran dikonfirmasi,
              pesanan akan segera kami proses.
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          padding={1}
          border={"1px solid #e6e4e5"}
          borderRadius={"10px"}
          flexDirection={"column"}
          mt={2}
          gap={1}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body2" fontWeight={"bold"}>
              Pesan Follow-Up
            </Typography>
            <ButtonEditDelete />
          </Box>
          <Box>
            <Typography variant="body2">
              Hai [Nama Customer], kami ingin tahu apakah Anda puas dengan
              pesanan Anda dari Fesyen Store. Jika Anda memiliki pertanyaan atau
              umpan balik, jangan ragu untuk menghubungi kami. Kami selalu siap
              membantu!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PanelTemplateMessage;
