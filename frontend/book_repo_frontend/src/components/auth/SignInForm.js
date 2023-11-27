import React, {useState} from "react";
import { TextField, Box, Button } from '@mui/material';
import { textFieldStyle, buttonStyle } from '../../constants/styles';
import { useHistory } from 'react-router-dom';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';


const SignInForm = () => {
  const[user, setUser] = useState(null)
  const[loggedIn, setLoggedIn] = useState(false)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const history = useHistory()
  const cookies = new Cookies()

  const logoutUser = () => {
    setUser(null)
    cookies.remove("jwt_authorization")
  }

  const loginUser = () => {
    const user = { email, password }

    fetch("http://localhost:8080/api/v1/auth/authenticate", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify.body(user)
    }).then(response => {
      if (response.ok) {
        
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
      </Box>
    )
}

export default SignInForm
