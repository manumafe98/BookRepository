import React from 'react';
import { Typography, AppBar, Box, Toolbar } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const appBarStyle = {
    background : "#FFDFDF",
}

const textStyle = {
    color : "#F875AA",
    fontWeight : "bold",
}

const iconStyle = {
    color : "#F875AA",
}

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
            <LocalLibraryIcon style={iconStyle}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={textStyle}>
            BookRepository
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ButtonAppBar
