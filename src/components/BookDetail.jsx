import React from "react";
import { DialogContent, Button, Dialog, Typography } from "@mui/material";

const BookDetail = ({ isOpen, selectedBook, onClose, onDelete }) => (
  <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth={"sm"}>
    <DialogContent>
      <Typography variant="h5" component="div">
        {selectedBook?.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {selectedBook?.author}
      </Typography>
      <Typography variant="body2" className="breakText" gutterBottom>
        {selectedBook?.description}
      </Typography>
      <Button variant="outlined" onClick={onClose}>
        Close
      </Button>
      <Button
        className="deleteButton"
        variant="outlined"
        color="error"
        onClick={() => {
          onDelete(selectedBook?.id);
          onClose();
        }}
      >
        Delete
      </Button>
    </DialogContent>
  </Dialog>
);

export default BookDetail;
