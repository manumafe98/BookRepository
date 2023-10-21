package com.manumafe.book_repo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.manumafe.book_repo.model.Book;
import com.manumafe.book_repo.model.BookStatus;
import com.manumafe.book_repo.model.ApiResponse;
import com.manumafe.book_repo.service.BookService;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<ApiResponse> createBook(@RequestBody Book book) {
        bookService.saveBook(book);

        ApiResponse response = new ApiResponse("Book created successfully");

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public List<Book> getBooks() {
        return bookService.findAllBooks();
    }

    @GetMapping("/{status}")
    public List<Book> getBooksByStatus(@PathVariable BookStatus status) {
        return bookService.findBooksByStatus(status);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteBook(@PathVariable Integer id) {
        bookService.deleteBookById(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("/{id}")
    public Book updateBook(@RequestBody Book book, @PathVariable Integer id) {
        return bookService.updateBookById(book, id);
    }
}
