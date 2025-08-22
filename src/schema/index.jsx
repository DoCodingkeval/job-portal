import * as yup from "yup";

const validationSchema = yup.object({
  fullname: yup.string().min(8).max(30).required("Fullname is required!"),
  username: yup.string().min(5).required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
  cpass: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Confirm is required"),
  termscheck: yup
    .boolean()
    .oneOf([true], "You must accept the terms & conditions"),
});

export default validationSchema;
