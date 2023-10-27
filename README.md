# BookRepository

This project consist on a application to store your favourites books with the lecture status so you can track it, this is inspired in the webpage Goodreads.

## App Diagram

![BookRepositoryDiagram](https://github.com/manumafe98/One-Piece-Devil-Fruit-Finder-FastApi-MongoDb/assets/95315128/47ea6623-e05d-4fcb-a3a9-46458ea7e318)

## Api

The REST API is built using Spring boot Framework and dockerized.

And has the following endpoints:

- `GET /api/v1/books` : Retrieves a list of all books added.
- `GET /api/v1/books/{status}` : Retrieves a list of books by status.
- `POST /api/v1/books` : Creates a new book.
- `DELETE /api/v1/books/{id}` : Deletes a book by id.
- `PUT /api/v1/books/{id}` : Updates a book by id.

## Frontend

The Frontend is built using React Framework and dockerized.

It has three main parts:

### Appbar

The main appbar that displays the name of the webpage with the icon.

### Form

A form that when submitted sends a `POST` request to the backend.

### Paper

This paper holds the main part of the app, the part that displays the books that the user has submitted.

Consists on a set of appbars:

- The appbar that acts as a tab and has the following options `All`, `Read`, `Want to read` and `Reading` when you click one of these tabs the frontend sends a `GET` request to the `/api/v1/books/{status}` using the clicked status to display the set of books that have that status.
- Every book that you add consists on a new appbar that has the book name, book author and book status as a dropdown select so when you complete the book you can change the status, and when you change it sends a `PUT` request to the backend and finally a trash icon that when clicked sends a `DELETE` to the backend.

This paper by default shows all the books with all the satus. And dinamically changes when you add or delete a new book.

## Database

Consists on a PostgreSQL running on a docker container.

## Installation and Usage

It is required to have docker installed on your system to proceed.
After that clone the repository

```bash
git clone $repo
```

Then execute `docker-compose` to build and start the containers.

```bash
docker compose up -d
```

Finally visit `localhost:3000` in your web browser.
