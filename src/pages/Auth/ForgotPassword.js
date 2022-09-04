import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginInputs, registerInputs } from "../../constants/forms";
import FormInputs from "../../components/Form/FormInput";
import IconButton from "../../components/Buttons/IconButton";
import { GoogleOutlined } from "@ant-design/icons";
import FormActionButton from "../../components/Form/FormActionButton";
import AuthTitle from "../../components/Auth/AuthTitle";
import { RegisterSchema } from "../../validation/auth";
import {
  AuthBodyContainer,
  AuthPageContainer,
  AuthWrapper,
  BottomLink,
  OR,
} from "../../components/Auth";

const ForgotPassword = () => {
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async ({ city, birthdate, description }) => {
    // Submit data to server
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthPageContainer>
      <AuthWrapper>
        <AuthBodyContainer>
          <AuthTitle title="Forgot your password ?" />

          {registerInputs.map((input) => (
            <>
              <p
                style={{
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "30px",
                  color: errors[input.name] ? "red" : "black",
                }}
              >
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
              <FormInputs
                type={input.type}
                register={register}
                name={input.name}
                key={input.id}
                width={"100%"}
                error={errors[input.name]}
                label={input.label}
              />
            </>
          ))}

          <FormActionButton
            title={"Reset password"}
            style={{ marginTop: "10px" }}
            onClick={handleSubmit(onSubmit)}
            error={!isDirty || (isDirty && !isValid)}
          />

          <BottomLink
            to="/login"
            title="Remembered your password ?"
            linkLable="Sign in"
          />
        </AuthBodyContainer>
      </AuthWrapper>

      <BottomLink
        to="/login"
        title="Remembered your password ?"
        linkLable="Sign in"
      />
    </AuthPageContainer>
  );
};

export default ForgotPassword;
