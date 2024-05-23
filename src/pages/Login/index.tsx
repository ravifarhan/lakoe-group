import { Box, Button, ButtonProps, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { login as loginAPI } from "../../lib/API/call/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

interface ILogin {
  name: string;
  password: string;
}

const loginSchema = yup.object({
  name: yup.string().required("Username harus diisi"),
  password: yup.string().required("Password harus diisi"),
});

const Login: React.FC = () => {
  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: {
      name: "",
      password: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleOnSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const res = await loginAPI(data);
      const token = res.data.access_token;
      dispatch(login(token))
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmitError: SubmitErrorHandler<ILogin> = (data) => {
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
          Please login to Lakoe App
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
                id="name"
                required
                size="small"
                placeholder="Masukkan username/email"
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
            Login
          </ColorButton>
          <Typography
            fontSize={15}
            fontWeight={400}
            marginX={"auto"}
            color={"black"}
            mb={3}
          >
            Don't have an account yet?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#FF5F00" }}
            >
              Create account
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

export default Login;
