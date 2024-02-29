import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const BookCard = ({ book, onBookClick }) => (
  <Card elevation={3} className="bookCard" onClick={() => onBookClick(book)}>
    <CardContent className="cardContent">
      <Typography variant="h5" component="div">
        {book.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {book.author}
      </Typography>
      <Typography variant="body2" className="breakText">
        {book.description}
      </Typography>
    </CardContent>
  </Card>
);

export default BookCard;
