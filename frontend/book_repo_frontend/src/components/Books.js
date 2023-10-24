import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { status } from '../constants/status';
import { Container } from '@mui/system';

const paperStyle = {
  background: "#AEDEFC",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  width: "1000px",
  margin: "20px auto",
}

const appBarStyle = {
  background: "#FFDFDF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  marginBottom: "10px",
}

const buttonContainerStyle = {
  display: "flex",
}

const buttonStyle = {
  margin: "0 10px",
  color: "#F875AA",
  fontWeight: "bold",
}

const textStyle = {
  color : "#F875AA",
  fontWeight : "bold",
  marginRight: "50px",
}

const iconStyle = {
  color : "#F875AA",
}

export default function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/books")
      .then(res => res.json())
      .then(result => {
        setBooks(result)
      })
  }, [])

  const deleteClick = (id) => {
    fetch(`http://localhost:8080/api/v1/books/${id}`, {
      method:"DELETE"
    })
  }

  const putChange = (id, bookStatus, bookName, bookAuthor) => {
    
    const newBook = {bookName, bookAuthor, bookStatus}
    
    fetch(`http://localhost:8080/api/v1/books/${id}`, {
      method: "PUT",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(newBook)
    })
  }

  return (
    <div>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <AppBar position="static" style={appBarStyle}>
            <div style={buttonContainerStyle}>
              <Button color="secondary" style={buttonStyle}>
                All
              </Button>
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
          {books.map((book) => (
            <AppBar position="static" style={appBarStyle} key={book.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" color="primary" style={textStyle}>
                  {book.bookName}
                </Typography>
                <Typography variant="body1" color="primary" style={textStyle}>
                  {book.bookAuthor}
                </Typography>
                <TextField
                  className = "textfield"
                  select
                  defaultValue={book.bookStatus}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  inputProps={
                    { style: 
                      { 
                        color: "#F875AA" , 
                        fontWeight : "bold", 
                        background : "#FFDFDF"
                      }
                    }
                  }
                  InputProps={{ disableUnderline: true }}
                  onChange={(e) => {
                    putChange(book.id, e.target.value, book.bookName, book.bookAuthor)
                  }}
                  >
                  {status.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  </TextField>
                <IconButton onClick={() => deleteClick(book.id)}>
                  <DeleteIcon style={iconStyle}></DeleteIcon>
                </IconButton>
              </div>
            </AppBar>
          ))}
        </Paper>
      </Container>
    </div>
  )
}
