import {
  CloseCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import React, { useId, useState } from "react";
import styled from "styled-components";
import OverLayContainer from "./OverLayContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputs from "../../components/Form/FormInput";
import IconButton from "../Buttons/IconButton";
import FormActionButton from "../Form/FormActionButton";
import { loginInputs, registerInputs } from "../../constants/forms";
import {
  AuthBodyContainer,
  AuthTitle,
  AuthWrapper,
  ForgotPasswordLink,
  OR,
} from "../Auth";
import { LoginSchema, RegisterSchema } from "../../validation/auth";

const AuthModalUI = ({ authModal, toggleAuthModal }) => {
  const [isLogin, setisLogin] = useState(true);
  const toggleAuth = () => setisLogin((v) => !v);
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(isLogin ? LoginSchema : RegisterSchema),
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
      <AuthWrapper>
        <ModalHeader>
          <CloseContainer>
            <CloseOutlined
              style={{ fontSize: "20px", color: "grey" }}
              onClick={() => toggleAuthModal()}
            />
          </CloseContainer>
        </ModalHeader>

        <AuthBodyContainer>
          <AuthTitle
            title={isLogin ? "Login to your account" : "Create an account!"}
          />

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

          {isLogin && <ForgotPasswordLink />}
          <OR />

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
        </AuthBodyContainer>
      </AuthWrapper>
    </OverLayContainer>
  );
};

export default AuthModalUI;

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
