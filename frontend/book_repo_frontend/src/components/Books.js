import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs'
import { status } from '../constants/status';
import { Container } from '@mui/system';
import BookForm from './BookForm';

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

const tabStyle = {
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

const Books = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [endpointStatus, setEndpointStatus] = useState('')
  const [books, setBooks] = useState([])

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  }

  const getBooks = (status) => {
    fetch(`http://localhost:8080/api/v1/books${status}`)
    .then(res => res.json())
    .then(result => {
      setBooks(result)
    })
  }

  const deleteClick = (id) => {
    fetch(`http://localhost:8080/api/v1/books/${id}`, {
      method:"DELETE"
    }).then(() => {
      getBooks("")
    })
  }

  const putChange = (id, bookStatus, bookName, bookAuthor) => {
    
    const updatedBook = {bookName, bookAuthor, bookStatus}
    
    fetch(`http://localhost:8080/api/v1/books/${id}`, {
      method: "PUT",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(updatedBook)
    })
  }

  useEffect(() => {
    getBooks(endpointStatus)
  }, [endpointStatus])

  return (
    <div>
      <BookForm getBooks={getBooks}/>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <AppBar position="static" style={appBarStyle}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              sx = {{
                '& .MuiTabs-indicator': { backgroundColor: '#F875AA' }
              }}
            >
              <Tab label="All" style={tabStyle} onClick={() => setEndpointStatus("")}/>
              <Tab label="Read" style={tabStyle} onClick={() => setEndpointStatus("/READ")}/>
              <Tab label="Want to read" style={tabStyle} onClick={() => setEndpointStatus("/WANT_TO_READ")}/>
              <Tab label="Reading" style={tabStyle} onClick={() => setEndpointStatus("/READING")}/>
            </Tabs>
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

export default Books
