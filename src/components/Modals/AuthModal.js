import {
  CloseCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import React, { useId, useState } from "react";
import styled from "styled-components";
import { useRedux } from "../../hooks/useRedux";
import OverLayContainer from "./OverLayContainer";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import FormInputs from "../../components/Inputs/FormInputs";
// import FormButton from "../../components/Inputs/FormButton";
import { Divider } from "antd";
import TextArea from "../../components/Form/TextArea";
import FormInputs from "../../components/Form/FormInput";
import Primary from "../../components/Buttons/Primary";
import { Link } from "react-router-dom";
import IconButton from "../Buttons/IconButton";
import FormActionButton from "../Form/FormActionButton";
import { loginInputs, registerInputs } from "../../constants/forms";
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

const AuthModalUI = ({ authModal, toggleAuthModal }) => {
  const [isLogin, setisLogin] = useState(true);
  const toggleAuth = () => setisLogin((v) => !v);
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(isLogin ? validationSchema : RegisterSchema),
  });

  const onSubmit = async ({ city, birthdate, description }) => {
    // Submit data to server
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <OverLayContainer style={{ justifyContent: "center" }}>
      <Wrapper>
        <ModalHeader>
          <CloseContainer>
            <CloseOutlined
              style={{ fontSize: "20px", color: "grey" }}
              onClick={() => toggleAuthModal()}
            />
          </CloseContainer>
        </ModalHeader>

        <ModalBody>
          <Title>
            {isLogin ? "Login to your account" : "Create an account!"}
          </Title>
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
            : registerInputs.map((input) => (
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

          <FormActionButton
            title={isLogin ? "Login" : "Register"}
            style={{ marginTop: "10px" }}
            onClick={handleSubmit(onSubmit)}
            error={!isDirty || (isDirty && !isValid)}
          />

          {isLogin && (
            <div style={{ marginTop: "20px" }}>
              <Link
                to="/forgot/password"
                style={{
                  textDecoration: "underline",
                  color: "grey",
                  fontSize: "1rem",
                  marginTop: "30px",
                }}
              >
                <span>Forgot your password ?</span>
              </Link>
            </div>
          )}
          <OR>
            <span>OR</span>
          </OR>
          <div style={{ marginTop: "30px" }}>
            <IconButton
              icon={<GoogleOutlined style={{ color: "red" }} />}
              title={isLogin ? "Continue with Google" : "Sign up using Google"}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                // color: "grey",
                marginRight: "5px",
                fontSize: "1rem",
                marginTop: "30px",
              }}
            >
              {isLogin
                ? " You dont have an account ? "
                : "Already registered ?"}
              <span
                onClick={() => toggleAuth()}
                style={{
                  textDecoration: "underline",
                  color: "grey",
                  marginLeft: "5px",
                  fontSize: "1rem",
                  marginTop: "30px",
                  cursor: "pointer",
                }}
              >
                {isLogin ? "Register" : "Log in"}
              </span>
            </p>
          </div>
        </ModalBody>
      </Wrapper>
    </OverLayContainer>
  );
};

export default AuthModalUI;

const Wrapper = styled.div`
  background-color: white;
  /* height: 70%; */
  /* min-height: 50%; */
  border-radius: 3px;
  width: 38vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-bottom: 20px;
  /* bottom: 0; */
`;

const ModalHeader = styled.div`
  background-color: inherit;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
`;

const CloseContainer = styled.div`
  /* background-color: blue; */
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const ModalBody = styled.div`
  flex: 1;
  padding: 15px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
const OR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  span {
    margin: 0 10px;
  }

  &::after,
  &::before {
    content: "";
    display: block;
    background: lightgray;
    width: 100%;
    height: 1px;
    /* margin: 0 1px; */
  }
`;
