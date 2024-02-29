import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ id, inputLabel, multiline = false, field, form }) => {
  return (
    <TextField
      error={form.errors[field.name] && form.touched[field.name]}
      className="inputField"
      variant="standard"
      helperText={
        form.errors[field.name] &&
        form.touched[field.name] &&
        form.errors[field.name]
      }
      id={id}
      label={inputLabel}
      multiline={multiline}
      {...field}
    />
  );
};

export default InputField;
