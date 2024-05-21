import { Box, Button, ButtonProps, TextField, Typography } from "@mui/material";
import { registerUser } from "../../lib/API/call/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

interface IRegister {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const registerSchema = yup.object({
  name: yup.string().required("Nama harus diisi"),
  email: yup.string().required("Email harus diisi"),
  password: yup.string().required("Password harus diisi"),
  phone: yup.string().required("Nomor telepon harus diisi"),
});

const Register: React.FC = () => {
  const { control, handleSubmit } = useForm<IRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const handleOnSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmitError: SubmitErrorHandler<IRegister> = (data) => {
    console.log("Error", JSON.stringify(data, null, 2));
  };

  return (
    <Box
      bgcolor={"white"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box p={5} width={"100%"} flex={2}>
        <Typography fontSize={70} fontWeight={700} color={"#FF5F00"}>
          Lakoe
        </Typography>
        <Typography fontSize={40} fontWeight={400} color={"black"} mb={1}>
          Welcome to the App!
        </Typography>
        <Typography fontSize={20} fontWeight={400} color={"gray"} mb={3}>
          Please register to Lakoe App
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(handleOnSubmit, handleOnSubmitError)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            input: { color: "black" },
          }}
        >
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                variant="outlined"
                type="text"
                required
                size="small"
                placeholder="Masukkan nama anda"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "8px",
                    color: "#111111",
                    height: "48px",
                  },
                }}
                sx={{ position: "relative" }}
                error={!!fieldState.error?.message}
                helperText={
                  fieldState.error?.message && (
                    <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        position: "absolute",
                        left: -10,
                        top: 48,
                      }}
                    >
                      {fieldState.error?.message}
                    </span>
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                variant="outlined"
                type="number"
                required
                size="small"
                placeholder="Masukkan nomor telepon"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "8px",
                    color: "#111111",
                    height: "48px",
                  },
                }}
                sx={{ position: "relative" }}
                error={!!fieldState.error?.message}
                helperText={
                  fieldState.error?.message && (
                    <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        position: "absolute",
                        left: -10,
                        top: 48,
                      }}
                    >
                      {fieldState.error?.message}
                    </span>
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                variant="outlined"
                required
                size="small"
                placeholder="Masukkan email"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "8px",
                    color: "#111111",
                    height: "48px",
                  },
                }}
                sx={{ position: "relative" }}
                error={!!fieldState.error?.message}
                helperText={
                  fieldState.error?.message && (
                    <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        position: "absolute",
                        left: -10,
                        top: 48,
                      }}
                    >
                      {fieldState.error?.message}
                    </span>
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                variant="outlined"
                type="password"
                id="password"
                required
                size="small"
                placeholder="Masukkan password"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "8px",
                    color: "#111111",
                    height: "48px",
                  },
                }}
                sx={{ position: "relative" }}
                error={!!fieldState.error?.message}
                helperText={
                  fieldState.error?.message && (
                    <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        position: "absolute",
                        left: -10,
                        top: 48,
                      }}
                    >
                      {fieldState.error?.message}
                    </span>
                  )
                }
              />
            )}
          />
          <ColorButton
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#FF5F00",
              width: "full",
              height: "50px",
              borderRadius: "10px",
              color: "white",
              fontSize: "15px",
            }}
          >
            Register
          </ColorButton>
          <Typography
            fontSize={15}
            fontWeight={400}
            color={"black"}
            marginX={"auto"}
            mb={3}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#FF5F00" }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        flex={3}
        component={"img"}
        width={"100%"}
        height={"100vh"}
        sx={{ objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1628083167531-d46ac7652f49?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Box>
    </Box>
  );
};

export default Register;
