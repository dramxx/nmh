import React from "react";
import { TextField } from "@mui/material";

const BookFilter = ({ filter }) => {
  return (
    <TextField
      variant="standard"
      fullWidth
      label="Search in book name"
      onChange={(e) => filter(e.target.value, 500)}
      InputProps={{ className: "bookFilter" }}
    />
  );
};

export default BookFilter;
