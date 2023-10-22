import React from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

const paperStyle = {
    background: "#AEDEFC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "1000px",
    margin: "20px auto",
}

const appBarStyle = {
    background : "#FFDFDF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  const buttonContainerStyle = {
    display: "flex",
  };
  
  const buttonStyle = {
    margin: "0 10px",
    color: "#F875AA",
    fontWeight: "bold",
  };
  
  export default function Books() {

    return (
      <div>
        <Container>
          <Paper elevation={3} style={paperStyle}>
            <AppBar position="static" style={appBarStyle}>
              <div style={buttonContainerStyle}>
                <Button color="secondary" style={buttonStyle}>
                  Read
                </Button>
                <Button color="secondary" style={buttonStyle}>
                  Want to read
                </Button>
                <Button color="secondary" style={buttonStyle}>
                  Reading
                </Button>
              </div>
            </AppBar>
          </Paper>
        </Container>
      </div>
    );
  }
