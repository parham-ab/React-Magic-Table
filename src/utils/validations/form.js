import * as yup from "yup";

const formSchema = yup
  .object({
    priority: yup.number().required("Priority is required!"),
    name: yup.string().trim().required("Name is required!"),
  })
  .required();
export default formSchema;
