
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../../lib/API/call/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const [formInput, setFormInput] = useState<{ name: string; email: string; password: string; phone: string }>({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formInput);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box bgcolor={"#1d1d1d"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh" }}>
      <Box p={5}>
        <Typography fontSize={70} fontWeight={700} color={"#04A51E"}>Lakoe</Typography>
        <Typography fontSize={40} fontWeight={400} color={"white"} mb={3}>Create account Lakoe</Typography>
        <Box component={"form"} onSubmit={handleRegister} sx={{ display: "flex", flexDirection: "column", gap: 3, input: { color: "white" } }}>
          <TextField id="username" label="username" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, name: e.target.value })} />
          <TextField type="email" id="email" label="email" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, email: e.target.value })} />
          <TextField type="password" id="password" label="password" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, password: e.target.value })} />
          <TextField  id="phone" label="phone" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, phone: e.target.value })} />
          <Button type="submit" sx={{ bgcolor: '#04A51E', width: 'full', height: '50px', borderRadius: '10px', color: 'white', fontSize: '15px' }}>Register</Button>
          <Typography fontSize={15} fontWeight={400} color={"white"} mb={3}>Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: '#04A51E' }}>Login</Link></Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Register