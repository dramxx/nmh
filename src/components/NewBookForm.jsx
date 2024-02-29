import React from "react";
import { Paper, Button, Grid } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { v4 as uuidv4 } from "uuid";

import { newBookValidationSchema } from "../helpers/validations";
import InputField from "./components-lib/InputField";

const NewBookForm = ({ handleBookAdd }) => {
  const initialValues = {
    name: "",
    author: "",
    description: "",
  };

  return (
    <Paper elevation={3} className="paper newBookWrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          values.id = uuidv4();
          handleBookAdd(values);
          resetForm();
        }}
        validationSchema={newBookValidationSchema}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                id="name"
                name="name"
                inputLabel="Name"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                id="author"
                name="author"
                inputLabel="Author"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                id="description"
                name="description"
                inputLabel="Description"
                multiline
                component={InputField}
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Paper>
  );
};

export default NewBookForm;
