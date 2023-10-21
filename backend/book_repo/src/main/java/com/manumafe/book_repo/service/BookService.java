package com.manumafe.book_repo.service;

import java.util.List;
import com.manumafe.book_repo.model.Book;
import com.manumafe.book_repo.model.BookStatus;

public interface BookService {
    public Book saveBook(Book book);

    public void deleteBookById(Integer id);

    public Book updateBookById(Book book, Integer id);

    public List<Book> findAllBooks();

    public List<Book> findBooksByStatus(BookStatus satus);
}
