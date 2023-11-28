import React, { useState } from 'react';
import { TextField, MenuItem, Box, Paper, Button } from '@mui/material'
import { Container } from '@mui/system';
import { status } from '../../constants/status';
import { textFieldStyle, buttonStyle, paperStyle } from '../../constants/styles';
import Cookies from 'universal-cookie';

const BookForm = ({ getBooks }) => {
    const[bookName, setBookName] = useState('')
    const[bookAuthor, setBookAuthor] = useState('')
    const[bookStatus, setBookStatus] = useState('')
    const cookies = new Cookies()

    const postClick = () => {
      const book = { bookName, bookAuthor, bookStatus }
      
      fetch("http://localhost:8080/api/v1/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.get("jwt_authorization")}`
        },
        body: JSON.stringify(book)

      }).then( ()=> {
        getBooks("")
        setBookName('')
        setBookAuthor('')
        setBookStatus('')
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
    )
}

export default BookForm
