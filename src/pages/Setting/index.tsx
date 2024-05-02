import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Tab,
  Tabs,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const Setting = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" padding={"10px"} fontWeight={"bold"}>
          Fesyen Store
        </Typography>
        <Box sx={{ padding: "10px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Informasi" {...a11yProps(0)} />
              <Tab label="Lokasi" {...a11yProps(1)} />
              <Tab label="Template Pesan" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <CustomTabPanel value={value} index={0}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Informasi Toko
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormLabel id="Slogan" sx={{ fontWeight: "bold" }}>
                      Slogan
                    </FormLabel>
                    <TextField
                      fullWidth
                      placeholder="Buat Slogan untuk toko"
                      inputProps={{ style: { height: "5px" } }}
                    />
                    <FormLabel id="logo" sx={{ fontWeight: "bold" }}>
                      Nama Toko
                    </FormLabel>
                    <TextField
                      fullWidth
                      placeholder="Fesyen Store"
                      inputProps={{ style: { height: "5px" } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel id="deskripsi" sx={{ fontWeight: "bold" }}>
                      Deskripsi
                    </FormLabel>
                    <TextareaAutosize
                      placeholder="tuliskan Deskripsi toko disini"
                      style={{
                        width: "100%",
                        height: "120px",
                        border: "1px solid #e6e4e5",
                      }}
                    />
                  </Grid>
                </Grid>
                <Box display={"flex"} justifyContent={"end"}>
                  <Button
                    style={{
                      width: "30px",
                      backgroundColor: "#0086b4",
                      color: "white",
                      textTransform: "none",
                      borderRadius: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
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
                    <AddPhotoAlternateOutlined
                      fontSize="large"
                      sx={{ color: "gray" }}
                    />
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
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Lokasi
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Template Pesan
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Setting;
