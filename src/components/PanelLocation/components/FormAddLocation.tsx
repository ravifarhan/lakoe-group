import { HighlightOffOutlined, LocationOff } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import useLocationValidation, {
  ILocationForm,
} from "../../../lib/hook/validation/SettingValidation/useLocationValidation";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import Districts from "../../../mocks/districts.json";

interface ILocationProps {
  callback?: () => void;
}

const FormAddLocation: React.FC<ILocationProps> = ({ callback }) => {
  const { control, handleSubmit } = useLocationValidation();

  const submitHandler: SubmitHandler<ILocationForm> = (data) => {
    console.log(data, null, 2);
  };

  const handleSubmitError: SubmitErrorHandler<ILocationForm> = (data) => {
    console.log(data, null, 2);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
        <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel
              htmlFor="location_name"
              sx={{ color: "black", fontSize: "14px" }}
            >
              Nama Lokasi<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              name="location_name"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="location_name"
                  size="small"
                  placeholder="Cth. Toko Alamanda"
                  fullWidth
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <FormLabel htmlFor="city" sx={{ color: "black", fontSize: "14px" }}>
              Kota/Kecamatan<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  size="small"
                  options={Districts}
                  getOptionLabel={(option) => option.alt_name}
                  filterOptions={(options, { inputValue }) =>
                    options
                      .filter((option) =>
                        option.alt_name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      )
                      .slice(0, 3)
                  }
                  onChange={(_event, value) =>
                    field.onChange(value ? value.name : "")
                  }
                  value={
                    Districts.find(
                      (district) => district.name === field.value
                    ) || null
                  } 
                  isOptionEqualToValue={(option, value) =>
                    option.name === (value ? value.name : "")
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Cari Kota/kecamatan"
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            <FormLabel
              htmlFor="kodepos"
              sx={{ color: "black", fontSize: "14px" }}
            >
              Kode Pos<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              name="kodepos"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="kodepos"
                  size="small"
                  placeholder="Masukkan 5 digit kode pos"
                  fullWidth
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <FormLabel
              htmlFor="address"
              sx={{ color: "black", fontSize: "14px" }}
            >
              Alamat Lengkap<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Controller
              name="address"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="address"
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Tulis alamat lengkap toko"
                  size="small"
                  {...field}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <FormLabel id="pinpoint" sx={{ color: "black", fontSize: "14px" }}>
              Pinpoint Lokasi
              <FormHelperText>
                Tandai lokasi untuk mempermudah pemintaan pickup kurir
              </FormHelperText>
            </FormLabel>
            <Box>
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
                  position: "relative",
                  bottom: "60px",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <LocationOff
                  sx={{
                    position: "absolute",
                    left: "180px",
                    color: "#909090",
                  }}
                />
                <Typography
                  sx={{
                    color: "#0086b4",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Atur Pinpoint
                </Typography>
              </Box>
            </Box>
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

export default FormAddLocation;
