import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email address is required"),
    password: yup.string().required("No password provided."),
    // .min(8, "Password is too short - should be 8 chars minimum.")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
  });


  const RegisterSchema = yup.object().shape({
    registerEmail: yup
      .string()
      .email("Please enter a valid email to register")
      .required("Email address is required"),
  });
  export {LoginSchema, RegisterSchema}