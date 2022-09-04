import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginInputs } from "../../constants/forms";
import FormInputs from "../../components/Form/FormInput";
import IconButton from "../../components/Buttons/IconButton";
import { GoogleOutlined } from "@ant-design/icons";
import FormActionButton from "../../components/Form/FormActionButton";
import { LoginSchema } from "../../validation/auth";
import {
  AuthBodyContainer,
  AuthPageContainer,
  AuthTitle,
  AuthWrapper,
  BottomLink,
  ForgotPasswordLink,
  OR,
} from "../../components/Auth";

const Login = () => {
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
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
          <AuthTitle title="Login to your account" />
          {loginInputs.map((input) => (
            <FormInputs
              type={input.type}
              register={register}
              name={input.name}
              key={input.id}
              width={"100%"}
              error={errors[input.name]}
              label={input.label}
            />
          ))}

          <FormActionButton
            title={"Login"}
            style={{ marginTop: "10px" }}
            onClick={handleSubmit(onSubmit)}
            error={!isDirty || (isDirty && !isValid)}
          />

          <ForgotPasswordLink />

          <OR />
          <div style={{ marginTop: "30px" }}>
            <IconButton
              icon={<GoogleOutlined style={{ color: "red" }} />}
              title={"Continue with Google"}
            />
          </div>
        
          <BottomLink
        to="/register"
        title="You dont have an account ? "
        linkLable="Create an account"
      />
        </AuthBodyContainer>
      </AuthWrapper>

     
    </AuthPageContainer>
  );
};

export default Login;


