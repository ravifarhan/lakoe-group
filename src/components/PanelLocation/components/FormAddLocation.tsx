import { HighlightOffOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  FormLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

interface ILocationProps {
  callback?: () => void;
}

const FormAddLocation: React.FC<ILocationProps> = ({ callback }) => {
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
            Tambah Lokasi Baru
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
          <FormLabel id="nama-lokasi" sx={{ color: "black", fontSize: "14px" }}>
            Nama Lokasi<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <TextField fullWidth placeholder="Cth. Toko Alamanda" size="small" />
          <FormLabel id="kota" sx={{ color: "black", fontSize: "14px" }}>
            Kota/Kecamatan<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <TextField select placeholder="Cari kota/kecamatan" size="small">
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </TextField>
          <FormLabel id="kodepos" sx={{ color: "black", fontSize: "14px" }}>
            Kode Pos<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <TextField
            select
            placeholder="Masukkan 5 digit kode pos"
            size="small"
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </TextField>
          <FormLabel id="alamat" sx={{ color: "black", fontSize: "14px" }}>
            Alamat Lengkap<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <TextField
            fullWidth
            rows={10}
            placeholder="Tulis alamat lengkap toko"
            size="small"
          />
          <FormLabel id="pinpoint" sx={{ color: "black", fontSize: "14px" }}>
            Pinpoint Lokasi
            <FormHelperText>
              Tandai lokasi untuk mempermudah pemintaan pickup kurir
            </FormHelperText>
          </FormLabel>
          <img
            src="https://s3-alpha-sig.figma.com/img/4650/7afe/1e1f5a96c7473f75068bed4e83c6c278?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxkfJbJIokUmHRhnjcaIv8LNnPA5Bl9mrO2rh-7q027kmA0aPiaoOd9PrfJ5RbIZfm5CJo5Yaf0gxNi3AZzjsny2d~gRGDt1Fd2cICSZ8f8XYAUQz~A28uO0Ib3cLhndOLsEisAaEign48QWOtDx51jx-z7o004-~QlTrfFwJVaQ-gPmW6vKYbhY3AheMYP96O6PnLhUdoKpmUuG-4vkJPSamBktjYMOFoVgdzqvRbnyMh4Yl5eTTfnkY-W8h9oOnpayw~qddHLEWJgP9tYg8CGjSS5-hqVeIHbz7gvGKAPttw-dKmY8RZ3gthGOG1P6VhSL~gqHZcIMMRl5f-9lLA__"
            style={{
              width: "100%",
              height: "80px",
              objectFit: "cover",
              borderRadius: "10px",
              filter: "blur(2px)",
            }}
          ></img>
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

export default FormAddLocation;
