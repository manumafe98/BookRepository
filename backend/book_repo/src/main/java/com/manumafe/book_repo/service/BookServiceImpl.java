package com.manumafe.book_repo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.manumafe.book_repo.exceptions.BookNotFoundException;
import com.manumafe.book_repo.model.Book;
import com.manumafe.book_repo.model.BookStatus;
import com.manumafe.book_repo.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public List<Book> findBooksByStatus(BookStatus status) {
        return bookRepository.findByBookStatus(status);
    }

    @Override
    public void deleteBookById(Integer id) {
        bookRepository.deleteById(id);
    }

    @Override
    public Book updateBookById(Book book, Integer id) {
        Optional<Book> existingBook = bookRepository.findById(id);

        if (existingBook.isPresent()) {
            Book bookToUpdate = existingBook.get();
            bookToUpdate.setBookAuthor(book.getBookAuthor());
            bookToUpdate.setBookName(book.getBookName());
            bookToUpdate.setBookStatus(book.getBookStatus());

            return bookRepository.save(bookToUpdate);

        } else {
            throw new BookNotFoundException("Book with ID " + id + " not found");
        }
    }
}
