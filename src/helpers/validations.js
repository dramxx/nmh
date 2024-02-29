import * as Yup from "yup";

export const newBookValidationSchema = Yup.object({
  name: Yup.string().required("Book name is required."),
  author: Yup.string(),
  description: Yup.string().max(300, "Must be 300 characters or less."),
});
