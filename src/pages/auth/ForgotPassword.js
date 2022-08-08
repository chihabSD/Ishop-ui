import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRedux } from "../../hooks/useRedux";
import FormInputs from "../../components/Inputs/FormInputs";
import FormButton from "../../components/Inputs/FormButton";
import FormError from "../../components/Inputs/FormError";

import {
  ForgotPasswordFormContainer,
  ForgotPasswordFormContainerInner,
  ForgotPasswordFormForm,
  ForgotPasswordFormFormForm,
  ForgotPasswordFormTop,
} from "./styles/ForgotPasswordStyle";
import FormTitle from "../../components/Inputs/FormTitle";
const ForgotPassword = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email address is required"),
  });
  const {
    register,
    formState: { errors , isValid, isDirty, isSubmitting},
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const { loading, authenticated } = useRedux();
  const [email, setEmail] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ForgotPasswordFormContainer>
      <ForgotPasswordFormFormForm>
        <ForgotPasswordFormContainerInner>
          <ForgotPasswordFormTop>
            <span>Reset your password</span>
          </ForgotPasswordFormTop>
          <ForgotPasswordFormForm>
            <FormTitle
              title="Enter your email address and we'll send you a link to reset your password."
              isError={errors.email}
            />
            <FormInputs type="text" register={register} name={"email"} />

            <FormButton
              label="Submit"
              onClick={handleSubmit(onSubmit)}
              color="#222"
              error={!isDirty || !isValid}
              style={{
                width: "200px",
                display: "flex",
                alignItems: "center",
                justContent: "center",
                marginTop: "10px",
                borderRadius: "2px",
              }}
            />
            {errors.email && <FormError error={errors.email.message} />}
          </ForgotPasswordFormForm>
        </ForgotPasswordFormContainerInner>
      </ForgotPasswordFormFormForm>
    </ForgotPasswordFormContainer>
  );
};

export default ForgotPassword;
// // "react-router-dom": "^5.2.0",
// import React, { useEffect, useState } from "react";
// import { auth } from "../../firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRedux } from "../../hooks/useRedux";
// import {
//   ForgotPasswordFormContainer,
//   ForgotPasswordFormContainerInner,
//   ForgotPasswordFormForm,
//   ForgotPasswordFormFormForm,
//   ForgotPasswordFormTop,
// } from "./styles/ForgotPasswordStyle";
// import AuthInputs from "../../components/Inputs/AuthInputs";
// import Primary from "../../components/Buttons/Primary";
// import { useForm} from  'react-hook-form'
// import { yupResolver } from  '@hookform/resolvers/yup'
// import * as yup from 'yup';;

// const ForgotPassword = ({ history }) => {
// const validationSchema = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email address is"),
// });

//   const {register, formState:{errors},  handleSubmit,} = useForm({resolver:yupResolver(validationSchema)})
//   const { loading, authenticated } = useRedux();
//   const [email, setEmail] = useState("");

//   const config = {
//     url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
//     handleCodeInApp: true,
//   };
//   const submitData = async (e) => {
//     // console.log("caled");
//     // e.preventDefault();

//     try {
//       // sign with the email link that is sent during step 1 of registration
//       await auth.sendPasswordResetEmail(email, config);
//       setEmail("");
//       toast.success("Check your email for password reset link");
//       //   if (data.user.emailVerified) {
//       //     // remove user from LS

//       //     window.localStorage.removeItem("emailForRegistration");

//       //     // get user id token from current user
//       //     let user = auth.currentUser;

//       //     // update password
//       //     await user.updatePassword(password);

//       //     // user token
//       //     const idTokenResult = await user.getIdTokenResult();

//       //     // Redux store

//       //     console.log("user", user, "idtokenResult", idTokenResult);
//       //     history.push("/");
//       //     // redirect
//       //   }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };
// const submitForm = (data) => {
//   console.log(data);

// }
//   const ForgotPasswordForm = () => (
//     <ForgotPasswordFormFormForm>
//       <input type="email" name="email"  />
//       {/* <AuthInputs
//         value={email}
//         autoFocus
//         onChange={(e) => setEmail(e.target.value)}
//         // onChange={(e) =>setEm}
//         type="email"
//         title="Enter your email address and we'll send you a link to reset your password.
// "
//       /> */}
//           <Primary
//         disabled={!email}
//         color={"#222"}
//         title={"Submit"}
//         // onClick={() => handleSubmit(submitForm)}
//         style={{ width: "200px", display:'flex', alignItems:'center', justContent:'center',   marginTop: "30px", borderRadius: "2px" }}
//       />
//       {/* <br />
//       <button type="submit" className="btn btn-raised" disabled={!email}>
//         Submit
//       </button> */}
//     </ForgotPasswordFormFormForm>
//   );

//   const onSubmit = data => console.log(data);
//   return (
//     <ForgotPasswordFormContainer>
//       <ForgotPasswordFormContainerInner>
//         <ForgotPasswordFormTop>
//           <span>Reset your password</span>
//         </ForgotPasswordFormTop>

//         <ForgotPasswordFormForm>
//           {/* <div className="container col-md-6 offset-md-3 p-10"> */}
//           {/* {loading ? <h4>Loading ...</h4> : <h4>Forgot Password ? </h4>} */}
//           {/* {ForgotPasswordForm()} */}
//           <form>
//           <input {...register("email")} />
//           </form>
//           <p>{errors.email?.message}</p>

//           <Primary
//         // disabled={!email}
//         color={"#222"}
//         title={"Submit"}
//         onClick={handleSubmit(onSubmit)}
//         // onClick={() => handleSubmit(submitForm)}
//         style={{ width: "200px", display:'flex', alignItems:'center', justContent:'center',   marginTop: "30px", borderRadius: "2px" }}
//       />
//           <ToastContainer />
//           {/* </div> */}
//         </ForgotPasswordFormForm>
//       </ForgotPasswordFormContainerInner>
//     </ForgotPasswordFormContainer>
//   );
// };

// export default ForgotPassword;
