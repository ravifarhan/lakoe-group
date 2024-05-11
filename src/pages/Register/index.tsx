
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate()

  const [formInput, setFormInput] = useState<{ username: string; email: string; password: string; }>({
    username: "",
    email: "",
    password: ""
  });

  console.log(formInput, `ini form input`);  

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('button register berhasil di klik');
  };

  return (
    <Box bgcolor={"#1d1d1d"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh" }}>
      <Box p={5}>
        <Typography fontSize={70} fontWeight={700} color={"#04A51E"}>Lakoe</Typography>
        <Typography fontSize={40} fontWeight={400} color={"white"} mb={3}>Create account Lakoe</Typography>
        <Box component={"form"} onSubmit={handleRegister} sx={{ display: "flex", flexDirection: "column", gap: 3, input: { color: "white" } }}>
          <TextField id="outlined-basic" label="username" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, username: e.target.value })} />
          <TextField type="email" id="outlined-basic" label="email" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, email: e.target.value })} />
          <TextField type="password" id="outlined-basic" label="password" variant="outlined" sx={{ border: "1px solid #545454", borderRadius: "10px", width: "500px" }}
            InputLabelProps={{ style: { color: "#B2B2B2" } }} onChange={(e) => setFormInput({ ...formInput, password: e.target.value })} />
          <Button type="submit" sx={{ bgcolor: '#04A51E', width: 'full', height: '50px', borderRadius: '10px', color: 'white', fontSize: '15px' }}>Register</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Register