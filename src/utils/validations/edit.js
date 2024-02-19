import * as yup from "yup";

const editSchema = yup
  .object({
    priority: yup.number().required("Priority is required!"),
    name: yup.string().trim().required("Name is required!"),
  })
  .required();
export default editSchema;
