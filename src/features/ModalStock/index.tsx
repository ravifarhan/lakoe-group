import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input, TextField } from "@mui/material";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IModalStock {
  stock: number;
}

export default function ModalStock() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [stok, setStok] = React.useState("");
  console.log(stok);

  const StockSchema = yup.object({
    stock: yup.number().required(),
  });

  const { control, handleSubmit, reset } = useForm<IModalStock>({
    defaultValues: {
      stock: 0,
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(StockSchema),
  });

  const handleOnSubmit: SubmitHandler<IModalStock> = (data) => {
    alert("Berhasil Mengubah Stok");
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<IModalStock> = (data) => {
    alert("error" + JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOnSubmit, handleSubmitError)}>
        <Button
          onClick={handleOpen}
          sx={{
            width: "120px",
            height: "25px",
            borderRadius: "20px",
            border: "1px #909090 solid",
            textTransform: "none",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Ubah Stok
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box>
              <Typography variant="h6" fontWeight={"bold"}>
                Ubah Stok
              </Typography>
            </Box>
            <Box marginTop={"10px"}>
              <Typography>
                Ubah harga untuk produk KAOS BASIC POLOS - BUBLE GUM COMBED
                BIOWASH 30s Kaos Polos - S
              </Typography>
            </Box>
            <Box
              display={"flex"}
              width={"400px"}
              height={"40px"}
              border={"#e8e8e8 1px solid"}
              borderRadius={"10px"}
              marginTop={"10px"}
            >
              <Box width={"100%"}>
                <Controller
                  control={control}
                  name="stock"
                  render={({ field, fieldState }) => (
                    <TextField
                      type="number"
                      placeholder="isi stock"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        console.log(e.target.value);
                      }}
                      sx={{ width: "100%" }}
                      size="small"
                    ></TextField>
                  )}
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"end"} marginTop={"10px"}>
              <Box>
                <Button
                  sx={{
                    width: "90px",
                    height: "30px",
                    color: "black",
                    borderRadius: "15px",
                    textTransform: "none",
                    bgcolor: "white",
                    border: "#b7b7b7 1px solid",
                    marginRight: "8px",
                  }}
                  onClick={handleClose}
                >
                  Batalkan
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={handleSubmit(handleOnSubmit, handleSubmitError)}
                  sx={{
                    width: "90px",
                    height: "30px",
                    color: "white",
                    borderRadius: "15px",
                    textTransform: "none",
                    bgcolor: "#0086b4",
                  }}
                >
                  Simpan
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </form>
    </div>
  );
}
