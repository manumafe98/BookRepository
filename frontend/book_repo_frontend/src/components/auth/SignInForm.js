import React, { useState } from "react";
import { TextField, Box, Button, Typography } from '@mui/material';
import { textFieldStyle, buttonStyle, textStyle } from '../../constants/styles';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";


const SignInForm = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[invalidPassword, setInvalidPassword] = useState(false)
  const[invalidUser, setInvalidUser] = useState(false)
  const navigate = useNavigate()
  const cookies = new Cookies()

  const loginUser = () => {
    const user = { email, password }

    fetch("/api/v1/auth/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "INCORRECT_PASSWORD") {
        setInvalidPassword(true)
      } else if (data.status === "USER_NOT_REGISTERED") {
        setInvalidUser(true)
      } else {
        const jwt_token = data.token
        const decoded = jwtDecode(jwt_token)
  
        cookies.set("jwt_authorization", jwt_token, {path: '/main'})
        localStorage.setItem("user", JSON.stringify(decoded))
        navigate('/main')
        window.location.reload()
      }
    })
  }

    return (
        <Box component="form"
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
        <Button variant="contained" style={buttonStyle} onClick={loginUser}>Submit</Button>
        { invalidPassword && <Typography variant="string" style={textStyle}>Incorrect password, try again</Typography> }
        { invalidUser && <Typography variant="string" style={textStyle}>The email is not registered, Sign Up first</Typography> }
      </Box>
    )
}

export default SignInForm
