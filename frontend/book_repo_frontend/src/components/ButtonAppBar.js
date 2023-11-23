import React from 'react';
import { Typography, AppBar, Box, Toolbar } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { iconStyle, textStyleAppbar, appBarColor } from '../constants/styles';


const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarColor}>
        <Toolbar>
          <LocalLibraryIcon style={iconStyle}/>
          <Typography variant="h6" component="div" style={textStyleAppbar}>
            BookRepository
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ButtonAppBar
