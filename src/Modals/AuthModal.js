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
  AuthModalFormLinks,
  AuthModalFormLinksLeft,
  AuthModalFormMiddle,
  AuthModalFormLinksRight,
  CheckboxContainer, Checkbox, 
  ORContainer,
  OR,
  
} from "./styles/AuthModal";
import { CloseOutlined, GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { ModalContainer } from "./styles/Container";
import AuthInputs from "../components/Inputs/AuthInputs";
import { Link } from "react-router-dom";
import Primary from "../components/Buttons/Primary";

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

            <AuthModalFormLinks>
              <AuthModalFormLinksLeft>
                <CheckboxContainer>
                  <Checkbox>
                  </Checkbox>
                  <span>Stay signed in</span>
                </CheckboxContainer>
              </AuthModalFormLinksLeft>

              <Link
                to="/forgot/password"
                style={{
                  textDecoration: "underline",
                  color: "grey",
                }}
              >
                <span>Forgot your password ?</span>
              </Link>
            </AuthModalFormLinks>

            <Primary
              icon={<MailOutlined />}
              title="Login with email"
              color={"black"}
            />

            <AuthModalFormMiddle>
              <Link to="/forgot/password">
                <span>Trouble signing in ? </span>
              </Link>
            </AuthModalFormMiddle>
            {/* <ORContainer> */}

            <OR><span>OR</span></OR>
            {/* </ORContainer> */}

            {/* BOTTOM BUTTONS */}
            <Primary
              icon={<GoogleOutlined style={{ color: "red" }} />}
              title="Continue with Google"
            />
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
