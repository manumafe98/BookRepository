import React, { useState } from "react";
import { TextField, Box, Button, Typography } from '@mui/material';
import { textFieldStyle, buttonStyle } from "../../constants/styles";


const SignUpForm = () => {
  const[fullname, setFullname] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[invalidRegistration, setInvalidRegistration] = useState(false)

  const registerUser = () => {
    const user = { fullname, email, password }

    fetch("/api/v1/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
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
          onChange={(e) => setFullname(e.target.value)}/>

        <TextField 
          id="outlined-basic" 
          label="Email"
          variant="outlined" 
          style={textFieldStyle}
          onChange={(e) => setEmail(e.target.value)}/>

        <TextField 
          id="outlined-basic" 
          label="Password"
          type="password"
          variant="outlined" 
          style={textFieldStyle}
          onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" style={buttonStyle} onClick={registerUser}>Submit</Button>
        { invalidRegistration && <Typography variant="string">The email is already in use, try again</Typography> }
      </Box>
    )
}

export default SignUpForm
