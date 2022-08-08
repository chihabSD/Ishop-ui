import React from "react";
import { AuthInputsTitle, AuthInputsContainer } from "./styles/AuthInputs";
const AuthInputs = ({ type, title, value, onChange }) => {
  return (
    <AuthInputsContainer>
      <AuthInputsTitle>{title}</AuthInputsTitle>
      <input type={type}  value={value} onChange={onChange}/>
      
    </AuthInputsContainer>
  );
};

export default AuthInputs;
