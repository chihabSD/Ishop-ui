import React, { useEffect, useState } from "react";
import {
  AuthModalContainer,
  AuthModalContainerLeft,
  AuthModalContainerRight,
  TermsContainer,
  AuthModalContainerLeftHeader,
  AuthModalContainerLeftHeaderTitle,
 
  AuthModalFormLinks,
  AuthModalFormLinksLeft,
  AuthModalFormMiddle,

  OR,
} from "./styles/AuthModal";
import {
  CloseOutlined,
  CheckOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import FormButton from "../components/Inputs/FormButton";
import FormInputs from "../components/Inputs/FormInputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { COLORS } from "../constants/theme";
import { loginInputs, registerInputs } from "../constants/forms";
import setAutheader from "../api/setAutheader";
import { useRedux } from "../hooks/useRedux";
import { _updateOrCreateUser } from "../redux/actions/auth";
import { clearLoading } from "../redux/reducers/loader";
import { toast, ToastContainer } from "react-toastify";
import { googleAuthProvider, auth } from "../firebase";
import Background from "./Background";
import { AuthContainer } from "../styles/Containers";


const AuthModal = ({ toggleModal }) => {
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

  return (
    <Background>
      <AuthModalContainer>
        {/* LEFT */}
        <AuthModalContainerLeft>
          <div>
            <AuthModalContainerLeftHeader>
              <AuthModalContainerLeftHeaderTitle>
                <span>{isLogin ? `Sign in` : "Create your account"}</span>
              </AuthModalContainerLeftHeaderTitle>
              <FormButton color='white' textColor={'#111'}
                style={{
                  border: "2px solid black",
                  padding: "10px 15px",
                  color:'black', 
                  transition: "background-color 2s ease-out 100ms",
                }}
                label={isLogin ? `Register` : `Login`}
              ></FormButton>
             
            </AuthModalContainerLeftHeader>
          </div>
          {/* FORM  */}
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
        </AuthModalContainerLeft>
        {/* LEFT END  */}

        <AuthModalContainerRight>
          <CloseOutlined
            style={{ color: "white", fontSize: "25px" }}
            onClick={() => toggleModal()}
          />
        </AuthModalContainerRight>
        {/* END RIGHT  */}
      </AuthModalContainer>
      <ToastContainer />
    </Background>
  );
};

export default AuthModal;
