import React, { useEffect, useState } from 'react';
import { Typography, AppBar, Box, Toolbar, Button } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { iconStyle, textStyleAppbar, appBarColor, textStyle } from '../constants/styles';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


const ButtonAppBar = () => {
  const [islogged, setislogged] = useState(false)
  const navigate = useNavigate()
  const cookies = new Cookies()

  const checkStorage = () => {
    if (localStorage.getItem("user")) {
      setislogged(true)
    }
  }

  const logoutUser = () => {
    cookies.remove("jwt_authorization")
    setislogged(false)
    localStorage.removeItem("user")
    navigate('/')
  }

  useEffect( () => {
    checkStorage()
  }, [islogged])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarColor}>
        <Toolbar>
          <LocalLibraryIcon style={iconStyle}/>
          <Typography variant="h6" component="div" style={textStyleAppbar}>
            BookRepository
          </Typography>
          { islogged && <Button variant="text" style={textStyle} onClick={logoutUser}>LogOut</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ButtonAppBar
