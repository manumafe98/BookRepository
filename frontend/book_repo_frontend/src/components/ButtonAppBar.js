import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

export default function ButtonAppBar() {
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
  );
}
