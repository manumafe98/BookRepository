package com.manumafe.book_repo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manumafe.book_repo.model.Book;
import com.manumafe.book_repo.model.BookStatus;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByBookStatus(BookStatus status);
}
