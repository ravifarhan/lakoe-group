import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input, TextField } from "@mui/material";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

interface ITestForm {
  input: number;
}

export default function ModalPrice() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [price, setprice] = React.useState(0);
  // console.log(price);

  const TestFormSchema = yup.object({
    input: yup.number().required("isi harga yg ingin di ubah"),
  });

  const { control, handleSubmit, reset } = useForm<ITestForm>({
    defaultValues: {
      input: 0,
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(TestFormSchema),
  });

  const handleOnSubmit: SubmitHandler<ITestForm> = (data) => {
    alert("Berhasil Mengubah Harga");
    reset();
  };

  const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
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
          Ubah Harga
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
                Ubah Harga
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
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"50px"}
                bgcolor={"#f8f8f8"}
                borderRadius={"10px 0px 0px 10px"}
              >
                <Typography fontWeight={"bold"}>Rp.</Typography>
              </Box>
              <Box width={"350px"}>
                <Controller
                  control={control}
                  name="input"
                  render={({ field, fieldState }) => (
                    <TextField
                      type="number"
                      placeholder="Masukan harga"
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
                    />
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
                  type="submit"
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
