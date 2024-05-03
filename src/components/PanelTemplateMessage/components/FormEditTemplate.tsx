import { HighlightOffOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

interface ITemplateProps {
  callback?: () => void;
}

const FormEditTemplate: React.FC<ITemplateProps> = ({ callback }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" fontWeight={"bold"}>
            Edit Template Pesan
          </Typography>
          <Button
            size="small"
            sx={{
              minWidth: "auto",
              p: "0px",
              ":hover": { backgroundColor: "transparent" },
            }}
          >
            <HighlightOffOutlined sx={{ color: "gray" }} onClick={callback} />
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <FormLabel id="judul-pesan" sx={{ color: "black", fontSize: "14px" }}>
            Judul Pesan<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <TextField
            fullWidth
            placeholder="Cth. Pesan Konfirmasi Pengiriman"
            size="small"
          />
          <FormLabel
            id="detail-pesan"
            sx={{ color: "black", fontSize: "14px" }}
          >
            Detail isi Pesan<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Box display={"flex"} sx={{ gap: "10px" }}>
            <Button
              sx={{
                width: "120px",
                height: "30px",
                color: "black",
                backgroundColor: "white",
                border: "1px solid gray",
                ":hover": {
                  backgroundColor: "white",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Nama Pembeli
            </Button>
            <Button
              sx={{
                width: "110px",
                height: "30px",
                color: "black",
                backgroundColor: "white",
                border: "1px solid gray",
                ":hover": {
                  backgroundColor: "white",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Nama Produk
            </Button>
            <Button
              sx={{
                width: "100px",
                height: "30px",
                color: "black",
                backgroundColor: "white",
                border: "1px solid gray",
                ":hover": {
                  backgroundColor: "white",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Nama Toko
            </Button>
          </Box>
          <TextField multiline rows={6} fullWidth placeholder="Tuliskan isi pesan disini"  />
          
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              mt: "10px",
            }}
          >
            <Button
              onClick={callback}
              sx={{
                width: "80px",
                height: "35px",
                color: "black",
                backgroundColor: "white",
                border: "1px solid gray",
                ":hover": {
                  backgroundColor: "white",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Batalkan
            </Button>
            <Button
              sx={{
                width: "80px",
                height: "35px",
                color: "white",
                backgroundColor: "#0086b4",
                ":hover": {
                  backgroundColor: "#0086b4",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Simpan
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FormEditTemplate;
