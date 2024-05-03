import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import {
  Box,
  Typography,
  Grid,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";

const PanelInformation = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="body1" fontWeight={"bold"}>
          Informasi Toko
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormLabel
              id="Slogan"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              Slogan
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Buat Slogan untuk toko"
              inputProps={{ style: { height: "5px" } }}
            />
            <FormLabel id="logo" sx={{ fontWeight: "bold", fontSize: "14px" }}>
              Nama Toko
            </FormLabel>
            <TextField
              fullWidth
              defaultValue={"Fesyen Store"}
              inputProps={{ style: { height: "5px" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel
              id="deskripsi"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              Deskripsi
            </FormLabel>
            <TextField
              placeholder="Tuliskan deskripsi toko disini"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"end"}>
          <Button
            variant="contained"
            size="small"
            sx={{
              width: "80px",
              height: "40px",
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderTop={"1px solid #e6e4e5"}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Logo Toko
          </Typography>
          <Box
            display={"flex"}
            borderRadius={"10px"}
            padding={"10px"}
            border={"1px solid #e6e4e5"}
            width={"200px"}
            height={"200px"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <label htmlFor="image">
              <AddPhotoAlternateOutlined
                fontSize="large"
                sx={{ color: "gray" }}
                cursor={"pointer"}
              />
            </label>
            <input id="image" type="file" hidden accept="image/*" />
            <Typography sx={{ color: "gray" }}>Upload Logo</Typography>
          </Box>
          <Typography variant="caption">
            Ukuran optimal 300x300 pixel dengan Besar file: Maximum 10MB
          </Typography>
          <Typography variant="caption">
            Ekstensi file ynag diperbolehkan: JPG.JPEG.PNG
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PanelInformation;
