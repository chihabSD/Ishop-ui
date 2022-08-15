import React, { useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { useRedux } from "../../hooks/useRedux";
import {
  _firebaseLogin,
  _nativeLogin,
  _updateOrCreateUser,
} from "../../redux/actions/auth";
import { clearLoading } from "../../redux/reducers/loader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import axios from "axios";
import setAutheader from "../../api/setAutheader";
import { sendEmailLink } from "./sendeEmailLink";
import Header from "../../components/header/Header";
import HeaderTwo from "../../components/header/HeaderTwo";
import FormButton from "../../components/Inputs/FormButton";
import BodyLayout from "../../components/BodyLayout";
import { AuthContainer } from "../../styles/Containers";
import {
  AuthModalFormLinks,
  AuthModalFormLinksLeft,
  AuthModalFormMiddle,
  OR,
  TermsContainer,
} from "../../Modals/styles/AuthModal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { COLORS } from "../../constants/theme";
import FormInputs from "../../components/Inputs/FormInputs";
import { loginInputs, registerInputs } from "../../constants/forms";
const Login = ({ history }) => {
  const [isLogin, setisLogin] = useState(true);
  const validationSchema = yup.object().shape({
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

  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(isLogin ? validationSchema : RegisterSchema),
  });

  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const toggleIsLogin = () => {
    setisLogin((prev) => !prev);
  };

  // Handle Email password Login
  const onSubmit = async ({ email, password }) => {
    try {
      const data = await auth.signInWithEmailAndPassword(email, password);
      // const { user } = data;
      const idTokenResult = await data.user.getIdTokenResult();
      setAutheader(idTokenResult.token);
      dispatch(
        _updateOrCreateUser({
          token: idTokenResult.token,
          emailVerified: data.user.emailVerified,
        }),
        navigate
      );

      // history.push("/");
      // roleBasedRedirect(user.role)
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      dispatch(clearLoading());
    }
  };

  const navigate = useNavigate();
  const { dispatch, loading, user } = useRedux();

  const googleLogin = async () => {
    try {
      const data = await auth.signInWithPopup(googleAuthProvider);
      const { user } = data;
      const idTokenResult = await user.getIdTokenResult();
      // console.log(user);
      // dispatch(_nativeLogin({ user: "chihafs" }));
      // Requst to our own backend

      dispatch(
        _updateOrCreateUser({
          token: idTokenResult.token,
          emailVerified: user.emailVerified,
        })
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);

      dispatch(clearLoading());
    }
  };

  // const navigate = useNavigate;
  // const { dispatch, loading, user } = useRedux();
  // const data = {
  //   email: "",
  //   password: "",
  // };
  // const [inputs, setInputs] = useState(data);
  // const { email, password } = inputs;
  // const handleInputs = (e) => {
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });
  // };

  // const roleBasedRedirect = (role) => {
  //   if (role === "admin") {
  //     navigate("/admin");
  //   } else {
  //     navigate("/user/history");
  //   }
  // };
  // const googleLogin = async () => {
  //   try {
  //     const data = await auth.signInWithPopup(googleAuthProvider);
  //     const { user } = data;
  //     const idTokenResult = await user.getIdTokenResult();
  //     // console.log(user);
  //     // dispatch(_nativeLogin({ user: "chihafs" }));
  //     // Requst to our own backend

  //     dispatch(
  //       _updateOrCreateUser({
  //         token: idTokenResult.token,
  //         emailVerified: user.emailVerified,
  //       })
  //     );
  //   } catch (error) {
  //     toast.error(error.message);
  //     dispatch(clearLoading());
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const data = sendEmailLink({email, password})

  //   try {
  //     const data = await auth.signInWithEmailAndPassword(email, password);
  //     // const { user } = data;
  //     const idTokenResult = await data.user.getIdTokenResult();

  //     setAutheader(idTokenResult.token);
  //     dispatch(
  //       _updateOrCreateUser({
  //         token: idTokenResult.token,
  //         emailVerified: data.user.emailVerified,
  //       }),
  //       navigate
  //     );

  //     // history.push("/");
  //     // roleBasedRedirect(user.role)
  //   } catch (error) {
  //     toast.error(error.message);
  //     dispatch(clearLoading());
  //   }
  // };

  // const loginForm = () => (
  //   <form onSubmit={handleSubmit}>
  //     <div className="form-group">
  //       <input
  //         type="email"
  //         placeholder="Email address"
  //         name="email"
  //         value={email}
  //         className="form-control"
  //         onChange={handleInputs}
  //         autoFocus
  //       />
  //     </div>

  //     <div className="form-group">
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         name="password"
  //         value={password}
  //         className="form-control"
  //         onChange={handleInputs}
  //       />
  //     </div>
  //     <br />

  //     <Button
  //       icon={<MailOutlined />}
  //       block
  //       shape="round"
  //       type="primary"
  //       className="mb-3"
  //       size="large"
  //       disabled={!email || password.length < 6}
  //       onClick={handleSubmit}
  //     >
  //       Login with Email/Password
  //     </Button>
  //   </form>
  // );
  return (
    <>
      <HeaderTwo>
        <FormButton label={isLogin ? "Login" : "Register"} textColor="#111" onClick={toggleIsLogin}/>
      </HeaderTwo>
      <BodyLayout>
        <div
          style={{
            width: "30%",
            margin: "0 auto",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <h1> Login </h1> */}
          <AuthContainer>
            {isLogin
              ? loginInputs.map((input) => (
                  <FormInputs
                    type={input.type}
                    register={register}
                    name={input.name}
                    key={input.id}
                    width={"100%"}
                    error={errors[input.name]}
                    label={input.label}
                  />
                ))
              : // loginInputs.map((input) => {

                // } (

                //   ))
                registerInputs.map((input) => (
                  <FormInputs
                    type="text"
                    register={register}
                    name={input.name}
                    key={input.id}
                    width={"100%"}
                    error={errors[input.name]}
                    label={input.label}
                  />
                  // <AuthInputs title={input.label} key={input.id} />
                ))}

            <AuthModalFormLinks>
              {isLogin && (
                <AuthModalFormLinksLeft>
                  {/* <CheckboxContainer>
                    <Checkbox onClick={() => toggleChecked()} checked={checked}>
                      {checked && <CheckOutlined style={{ color: "white" }} />}
                    </Checkbox>
                    <span>Stay signed in</span>
                  </CheckboxContainer> */}
                </AuthModalFormLinksLeft>
              )}
              {isLogin && (
                <Link
                  to="/forgot/password"
                  style={{
                    textDecoration: "underline",
                    color: "grey",
                    fontSize: "1rem",
                  }}
                >
                  <span>Forgot your password ?</span>
                </Link>
              )}{" "}
            </AuthModalFormLinks>

            <FormButton
              // label="Submit"
              onClick={handleSubmit(onSubmit)}
              icon={<MailOutlined />}
              color="#222"
              label={isLogin ? "Login with email" : "Register using email"}
              error={!isDirty && !isValid}
            />
            {/* <Primary
              icon={<MailOutlined />}
              title={isLogin ? "Login with email" : "Register using email"}
              color={"black"}
            /> */}

            <AuthModalFormMiddle>
              {isLogin && (
                <Link
                  to="/forgot/password"
                  style={{
                    textDecoration: "underline",
                    color: "grey",
                    fontSize: "1rem",
                  }}
                >
                  <span>Trouble signing in ? </span>
                </Link>
              )}{" "}
            </AuthModalFormMiddle>

            <OR>
              <span>OR</span>
            </OR>

            <FormButton
              // label="Submit"
              onClick={googleLogin}
              icon={<GoogleOutlined />}
              color={COLORS.red}
              label={isLogin ? "Continue with Google" : "Signup using Google"}
              // label={isLogin ? "Login with email" : "Register using email"}

              error={false}
            />

            {/* <Primary
              icon={<GoogleOutlined style={{ color: "red" }} />}

            /> */}
            <TermsContainer>
              <p>
                By clicking Sign in or Continue with Google, Facebook, or Apple,
                you agree to Etsy's Terms of Use and Privacy Policy. Etsy may
                send you communications; you may change your preferences in your
                account settings. We'll never post without your permission.
              </p>
            </TermsContainer>
          </AuthContainer>
        </div>
      </BodyLayout>
    </>
    // <div>
    //   <HeaderTwo>
    //     <FormButton label="Register" textColor="#111"/>
    //   </HeaderTwo>
    // <div className="container p-5">
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3">
    //       {loading ? (
    //         <h4 className="text-denger">Loading....</h4>
    //       ) : (
    //         <h4>Login</h4>
    //       )}
    //       {loginForm()}
    //       <Button
    //         icon={<GoogleOutlined />}
    //         block
    //         shape="round"
    //         type="danger"
    //         className="mb-3"
    //         size="large"
    //         onClick={googleLogin}
    //       >
    //         Login with Google
    //       </Button>
    //       <Link to="/forgot/password" className="float-right text-danger">
    //         Forgot your password ?{" "}
    //       </Link>
    //     </div>
    //   </div>
    //   <ToastContainer />
    // </div>
    // </div>
  );
};

export default Login;
