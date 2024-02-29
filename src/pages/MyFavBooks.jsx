import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import { storeInLocalStorate, getFromLocalStorage } from "../helpers/utils";
import NewBookForm from "../components/NewBookForm";
import BooksList from "../components/BooksList";
import BookFilter from "../components/BookFilter";
import { Typography } from "@mui/material";

const MyFavBooks = () => {
  const [filter, setFilter] = useState("");
  const [books, setBooks] = useState(() => getFromLocalStorage());

  useEffect(() => {
    storeInLocalStorate(books);
  }, [books]);

  const handleBookAdd = (book) => {
    setBooks([...books, book]);
  };

  const handleBookDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleFilter = (value, debounce) => {
    setTimeout(() => {
      setFilter(value);
    }, debounce);
  };

  const getFilteredBooks = () => {
    if (!filter) return books;

    return books.filter((book) => {
      return book.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item sm={6} xs={12}>
        <Typography
          variant="h5"
          gutterBottom
          className="addBookHeading"
          align="center"
        >
          Add new book
        </Typography>
        <NewBookForm handleBookAdd={handleBookAdd} />
      </Grid>
      <Grid item sm={6} xs={12}>
        <BookFilter filter={handleFilter} />
        <BooksList books={getFilteredBooks()} onDelete={handleBookDelete} />
      </Grid>
    </Grid>
  );
};

export default MyFavBooks;
