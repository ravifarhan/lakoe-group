import { HighlightOffOutlined } from "@mui/icons-material";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useTemplateValidation, {
  ITemplateForm,
} from "../../../lib/hook/validation/SettingValidation/useTemplateValidation";

interface ITemplateProps {
  callback?: () => void;
}

const FormAddTemplate: React.FC<ITemplateProps> = ({ callback }) => {
  const { control, handleSubmit } = useTemplateValidation();
  const submitHandler: SubmitHandler<ITemplateForm> = (data) => {
    console.log(data, null, 2);
  };

  const handleSubmitError: SubmitErrorHandler<ITemplateForm> = (data) => {
    console.log(data, null, 2);
  };

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
            Buat Template Pesan Baru
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
        <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <FormLabel
              htmlFor="title"
              sx={{ color: "black", fontSize: "14px" }}
            >
              Judul Pesan<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="title"
                  fullWidth
                  placeholder="Cth. Pesan Konfirmasi Pengiriman"
                  size="small"
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <FormLabel
              htmlFor="detail"
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
            <Controller
              name="detail"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="detail"
                  multiline
                  rows={5}
                  fullWidth
                  placeholder="Tuliskan isi pesan disini"
                  size="small"
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
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
                type="submit"
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
        </form>
      </Box>
    </>
  );
};

export default FormAddTemplate;
