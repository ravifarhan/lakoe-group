import {
  AddPhotoAlternateOutlined,
  DeleteOutline,
  EditOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  FormHelperText,
  Alert,
  FormLabel,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import useInfoValidation, {
  IStoreForm,
} from "../../lib/hook/validation/SettingValidation/useStoreValidation";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";

const PanelInformation = () => {
  const { control, handleSubmit, watch } = useInfoValidation();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const submitHandler: SubmitHandler<IStoreForm> = (data) => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
    console.log(data, null, 2);
  };

  const handleSubmitError: SubmitErrorHandler<IStoreForm> = (data) => {
    setShowErrorAlert(true);
    setTimeout(() => {
      setShowErrorAlert(false);
    }, 3000);
    console.log("error", data, null, 2);
  };

  const countSlogan = watch("slogan");
  const countDescription = watch("description");

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
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Box display={"flex"} alignItems={"center"} gap={1} paddingY={1}>
          <Typography variant="body1" fontWeight={"bold"}>
            Informasi Toko
          </Typography>
          {showSuccessAlert && (
            <Alert
              variant="filled"
              sx={{
                color: "white",
                backgroundColor: "#1d1d1d",
                "& .MuiAlert-icon": {
                  color: "#ffffff",
                },
                position: "absolute",
                right: 500,
                top: 20,
              }}
              onClose={() => {
                setShowSuccessAlert(false);
              }}
            >
              Informasi toko berhasil disimpan
            </Alert>
          )}
          {showErrorAlert && (
            <Alert
              variant="filled"
              severity="error"
              sx={{
                position: "absolute",
                right: 500,
                top: 20,
              }}
              onClose={() => {
                setShowErrorAlert(false);
              }}
            >
              Informasi toko gagal disimpan
            </Alert>
          )}
        </Box>
        <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
          <Box display={"flex"} gap={2}>
            <Box display={"flex"} flexDirection={"column"} width={"50%"}>
              <FormLabel htmlFor="store_name">Nama Toko</FormLabel>
              <Controller
                name="store_name"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    id="store_name"
                    size="small"
                    // defaultValue="Fesyen Store"
                    fullWidth
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <FormLabel style={{ marginTop: "10px" }} htmlFor="slogan">
                Slogan
              </FormLabel>
              <Controller
                name="slogan"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    id="slogan"
                    placeholder="Buat slogan untuk toko"
                    size="small"
                    fullWidth
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <FormHelperText sx={{ alignSelf: "end" }}>
                {countSlogan?.length}/48
              </FormHelperText>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"50%"}>
              <FormLabel htmlFor="description">Deskripsi</FormLabel>
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    id="description"
                    fullWidth
                    multiline
                    rows={3.5}
                    placeholder="Tuliskan deskripsi toko disini"
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <FormHelperText sx={{ alignSelf: "end" }}>
                {countDescription?.length}/200
              </FormHelperText>
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"end"} mt={2}>
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{
                alignSelf: "end",
                width: "90px",
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
            marginTop={"10px"}
          >
            <Typography
              sx={{ marginTop: "10px" }}
              variant="h6"
              fontWeight={"bold"}
            >
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
              marginTop={"10px"}
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
        </form>
      </Box>
    </>
  );
};

export default PanelInformation;
