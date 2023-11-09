package com.manumafe.book_repo.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.manumafe.book_repo.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
