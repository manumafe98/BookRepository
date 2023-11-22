import React from "react";
import { TextField, Box, Button } from '@mui/material';

const textFieldStyle = {
    background: "white",
}

const buttonStyle = {
    background: "#F875AA",
}

const SignUpForm = () => {

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
          style={textFieldStyle}/>

        <TextField 
          id="outlined-basic" 
          label="Username" 
          variant="outlined" 
          style={textFieldStyle}/>

        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          style={textFieldStyle}/>          
        <Button variant="contained" style={buttonStyle}>Submit</Button>
      </Box>
    )
}

export default SignUpForm
