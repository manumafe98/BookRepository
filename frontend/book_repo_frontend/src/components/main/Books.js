import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TextField, IconButton, Typography, AppBar, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { status } from '../../constants/status';
import { Container } from '@mui/system';
import BookForm from './BookForm';
import { iconStyle, tabStyle, customTextStyle, customPaperStyle, appBarStyle } from '../../constants/styles';
import ButtonAppBar from '../ButtonAppBar';
import Cookies from 'universal-cookie';

const Books = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [endpointStatus, setEndpointStatus] = useState('')
  const [books, setBooks] = useState([])
  const cookies = new Cookies()

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  }

  const getBooks = (status) => {
    fetch(`/api/v1/books${status}`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${cookies.get("jwt_authorization")}` }
    })
    .then(res => res.json())
    .then(result => {
      setBooks(result)
    })
  }

  const deleteClick = (id) => {
    fetch(`/api/v1/books/${id}`, {
      method:"DELETE"
    }).then(() => {
      getBooks("")
    })
  }

  const putChange = (id, bookStatus, bookName, bookAuthor) => {
    
    const updatedBook = {bookName, bookAuthor, bookStatus}
    
    fetch(`/api/v1/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(updatedBook)
    })
  }

  useEffect(() => {
    getBooks(endpointStatus)
  }, [endpointStatus])

  return (
    <div>
      <ButtonAppBar/>
      <BookForm getBooks={getBooks}/>
      <Container>
        <Paper elevation={3} style={customPaperStyle}>
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
                <Typography variant="body1" color="primary" style={customTextStyle}>
                  {book.bookName}
                </Typography>
                <Typography variant="body1" color="primary" style={customTextStyle}>
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
