import React from "react";
import {
  AuthModalContainer,
  AuthModalContainerLeft,
  AuthButton,
  AuthModalContainerRight,
  AuthModalContainerLeftHeader,
  AuthModalContainerLeftHeaderTitle,
  AuthModalContainerFormContainer,
  AuthModalContainerForm,
} from "./styles/AuthModal";
import { CloseOutlined } from "@ant-design/icons";
import { ModalContainer } from "./styles/Container";
import AuthInputs from "../components/Inputs/AuthInputs";

const AuthModal = ({ toggleModal }) => {
  return (
    <ModalContainer>
      <AuthModalContainer>
        {/* LEFT */}
        <AuthModalContainerLeft>
          <div>
            <AuthModalContainerLeftHeader>
              <AuthModalContainerLeftHeaderTitle>
                <span>Sign in</span>
              </AuthModalContainerLeftHeaderTitle>
              <AuthButton>Register</AuthButton>
            </AuthModalContainerLeftHeader>
          </div>
          {/* FORM  */}
          {/* <AuthModalContainerFormContainer> */}
          <AuthModalContainerForm>
            <AuthInputs title="Email address" />
            <AuthInputs title="Password" />
          </AuthModalContainerForm>
          {/* </AuthModalContainerFormContainer> */}
        </AuthModalContainerLeft>
        {/* LEFT END  */}
        <AuthModalContainerRight>
          <CloseOutlined
            style={{ color: "white", fontSize: "25px" }}
            onClick={() => toggleModal()}
          />
        </AuthModalContainerRight>
      </AuthModalContainer>
    </ModalContainer>
  );
};

export default AuthModal;
