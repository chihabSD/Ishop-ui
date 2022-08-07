import React from "react";
import { AuthInputsTitle, AuthInputsContainer } from "./styles/AuthInputs";
const AuthInputs = ({ type, title }) => {
  return (
    <AuthInputsContainer>
      <AuthInputsTitle>{title}</AuthInputsTitle>
      <input type={type}  />
    </AuthInputsContainer>
  );
};

export default AuthInputs;
