import React, { useState } from "react";
import { TextField, Box, Button } from '@mui/material';
import { textFieldStyle, buttonStyle } from "../../constants/styles";


const SignUpForm = () => {
  const[fullName, setFullName] = useState('')
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const registerUser = () => {
    const user = { fullName, username, password }

    fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify.body(user)
    })
  }

    return (
        <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& > :not(style)': {
            m: 1,
            width: '100%',
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic" 
          label="Full Name" 
          variant="outlined" 
          style={textFieldStyle}
          onChange={(e) => setFullName(e.target.value)}/>

        <TextField 
          id="outlined-basic" 
          label="Username" 
          variant="outlined" 
          style={textFieldStyle}
          onChange={(e) => setUsername(e.target.value)}/>

        <TextField 
          id="outlined-basic" 
          label="Password"
          type="password"
          variant="outlined" 
          style={textFieldStyle}
          onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" style={buttonStyle} onClick={registerUser}>Submit</Button>
      </Box>
    )
}

export default SignUpForm
