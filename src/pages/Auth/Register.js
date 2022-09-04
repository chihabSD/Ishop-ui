import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginInputs } from "../../constants/forms";
import FormInputs from "../../components/Form/FormInput";
import IconButton from "../../components/Buttons/IconButton";
import { GoogleOutlined } from "@ant-design/icons";
import FormActionButton from "../../components/Form/FormActionButton";
import AuthTitle from "../../components/Auth/AuthTitle";
import { RegisterSchema } from "../../validation/auth";
import { AuthBodyContainer, AuthPageContainer, AuthWrapper, BottomLink, OR } from "../../components/Auth";

const Register = () => {
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
          <AuthTitle title="Create an account!" />
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

          <OR />
          <div style={{ marginTop: "30px" }}>
            <IconButton
              icon={<GoogleOutlined style={{ color: "red" }} />}
              title={"Continue with Google"}
            />
          </div>

      <BottomLink
        to="/login"
        title="Already got an account ? "
        linkLable="Sign in"
      />
        </AuthBodyContainer>
      </AuthWrapper>

    </AuthPageContainer>
  );
};

export default Register;

