package com.manumafe.book_repo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.manumafe.book_repo.model.Book;
import com.manumafe.book_repo.model.User;
import com.manumafe.book_repo.model.BookStatus;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByBookStatusAndUser(BookStatus status, @Param("user_owner") User user);
    List<Book> findByUser(@Param("user_owner") User user);
}
