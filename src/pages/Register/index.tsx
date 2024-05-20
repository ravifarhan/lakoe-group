import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../../lib/API/call/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState<{
    name: string;
    email: string;
    password: string;
    phone: string;
  }>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formInput);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      bgcolor={"white"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box p={5} width={"100%"} flex={2}>
        <Typography fontSize={70} fontWeight={700} color={"#04A51E"}>
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
          onSubmit={handleRegister}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            input: { color: "white" },
          }}
        >
          <TextField
            id="username"
            label="username"
            variant="outlined"
            sx={{
              border: "1px solid #545454",
              borderRadius: "10px",
              width: "100%",
            }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }}
            onChange={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
          <TextField
            type="email"
            id="email"
            label="email"
            variant="outlined"
            sx={{
              border: "1px solid #545454",
              borderRadius: "10px",
              width: "100%",
            }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }}
            onChange={(e) =>
              setFormInput({ ...formInput, email: e.target.value })
            }
          />
          <TextField
            type="password"
            id="password"
            label="password"
            variant="outlined"
            sx={{
              border: "1px solid #545454",
              borderRadius: "10px",
              width: "100%",
            }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }}
            onChange={(e) =>
              setFormInput({ ...formInput, password: e.target.value })
            }
          />
          <TextField
            id="phone"
            label="phone"
            variant="outlined"
            sx={{
              border: "1px solid #545454",
              borderRadius: "10px",
              width: "100%",
            }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }}
            onChange={(e) =>
              setFormInput({ ...formInput, phone: e.target.value })
            }
          />
          <Button
            type="submit"
            sx={{
              bgcolor: "#04A51E",
              width: "full",
              height: "50px",
              borderRadius: "10px",
              color: "white",
              fontSize: "15px",
            }}
          >
            Register
          </Button>
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
              style={{ textDecoration: "none", color: "#04A51E" }}
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
        src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Box>
    </Box>
  );
};

export default Register;
