import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import BookCard from "./BookCard";
import BookDetail from "./BookDetail";

const BooksList = ({ books, onDelete }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Grid container className="bookList">
        {books.map((book) => (
          <Grid item xs={12} key={book.id}>
            <BookCard book={book} onBookClick={handleBookClick} />
          </Grid>
        ))}
        <BookDetail
          isOpen={isModalOpen}
          selectedBook={selectedBook}
          onClose={handleModalClose}
          onDelete={onDelete}
        />
      </Grid>
    </>
  );
};

export default BooksList;
