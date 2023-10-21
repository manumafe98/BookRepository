package com.manumafe.book_repo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Book {

    @Id
    @SequenceGenerator(name = "book_id_sequence", sequenceName = "book_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_id_sequence")
    private Integer id;

    @Column(unique = true)
    private String bookName;
    private String bookAuthor;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private BookStatus bookStatus;

    public Book() {
    }

    public Book(Integer id, String bookName, String bookAuthor, BookStatus bookStatus) {
        this.id = id;
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookStatus = bookStatus;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }

    public BookStatus getBookStatus() {
        return bookStatus;
    }

    public void setBookStatus(BookStatus bookStatus) {
        this.bookStatus = bookStatus;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((bookName == null) ? 0 : bookName.hashCode());
        result = prime * result + ((bookAuthor == null) ? 0 : bookAuthor.hashCode());
        result = prime * result + ((bookStatus == null) ? 0 : bookStatus.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Book other = (Book) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (bookName == null) {
            if (other.bookName != null)
                return false;
        } else if (!bookName.equals(other.bookName))
            return false;
        if (bookAuthor == null) {
            if (other.bookAuthor != null)
                return false;
        } else if (!bookAuthor.equals(other.bookAuthor))
            return false;
        if (bookStatus != other.bookStatus)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Book [id=" + id + ", bookName=" + bookName + ", bookAuthor=" + bookAuthor + ", bookStatus=" + bookStatus
                + "]";
    }

}
