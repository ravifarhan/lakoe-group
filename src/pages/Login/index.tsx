
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate()

  const [formInput, setFormInput] = useState<{ name: string; password: string; }>({
    name: "",
    password: ""
  });  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('login sukses');
  }

  return (
    <Box bgcolor={"#1d1d1d"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh" }}>
      <Box p={5}>
        <Typography fontSize={70} fontWeight={700} color={"#04A51E"}>Lakoe</Typography>
        <Typography fontSize={40} fontWeight={400} color={"white"} mb={3}>Login to Lakoe</Typography>
        <Box component={"form"} onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 3, input: { color: "white" } }}>
          <TextField id="username" label="username" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, name: e.target.value })} />
          <TextField type="password" id="password" label="password" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, password: e.target.value })} />
          <Button type="submit" sx={{ bgcolor: '#04A51E', width: 'full', height: '50px', borderRadius: '10px', color: 'white', fontSize: '15px' }}>Login</Button>
          <Typography fontSize={15} fontWeight={400} color={"white"} mb={3}>Don't have an account yet? <Link to="/register" style={{ textDecoration: 'none', color: '#04A51E' }}>Create account</Link></Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Login