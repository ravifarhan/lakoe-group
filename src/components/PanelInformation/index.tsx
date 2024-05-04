import {
  AddPhotoAlternateOutlined,
  DeleteOutline,
  EditOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Grid,
  FormLabel,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface PanelInformationProps {
  onSaveInformation: () => void;
}

const PanelInformation: React.FC<PanelInformationProps> = ({
  onSaveInformation,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    document.getElementById("image")?.click();
  };

  const handleDeleteClick = () => {
    setImagePreview(null);
  };

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
            onClick={onSaveInformation}
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
            position="relative"
          >
            <label htmlFor="image">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              ) : (
                <AddPhotoAlternateOutlined
                  fontSize="large"
                  sx={{ color: "#909090" }}
                  cursor={"pointer"}
                />
              )}
            </label>
            <input
              id="image"
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <>
                <IconButton
                  onClick={handleEditClick}
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    right: "40px",
                  }}
                >
                  <EditOutlined />
                </IconButton>
                <IconButton
                  onClick={handleDeleteClick}
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <DeleteOutline />
                </IconButton>
              </>
            )}
            <Typography variant="body2" sx={{ color: "#909090" }}>
              Upload Logo
            </Typography>
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
