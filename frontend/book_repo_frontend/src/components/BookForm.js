import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { status } from '../constants/status';

const paperStyle = {
    background: "#AEDEFC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "500px",
    margin: "20px auto",
  }

const textFieldStyle = {
    background: "white",
}

const buttonStyle = {
    background: "#F875AA",
}
  
  export default function BookForm() {
    const[bookName, setBookName] = React.useState('')
    const[bookAuthor, setBookAuthor] = React.useState('')
    const[bookStatus, setBookStatus] = React.useState('')

    const postClick = (e) => {
      const book={bookName, bookAuthor, bookStatus}
      
      fetch("http://localhost:8080/api/v1/books", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(book)

      }).then( ()=> {
        console.log("New Book Added")
      })
    }

    return (
      <Container>
        <Paper elevation={3} style={paperStyle}>
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
              label="Book Name" 
              variant="outlined" 
              style={textFieldStyle}
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}/>

            <TextField 
              id="outlined-basic" 
              label="Author" 
              variant="outlined" 
              style={textFieldStyle}
              value={bookAuthor}
              onChange={(e) => setBookAuthor(e.target.value)}/>

            <TextField
              id="outlined-select-status"
              select
              label="Status"
              style={textFieldStyle}
              value={bookStatus}
              onChange={(e) => setBookStatus(e.target.value)}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" style={buttonStyle} onClick={postClick}>Submit</Button>
          </Box>
        </Paper>
      </Container>
    );
  }