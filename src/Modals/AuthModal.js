import React, { useEffect, useState } from "react";
import {
  AuthModalContainer,
  AuthModalContainerLeft,
  AuthButton,
  AuthModalContainerRight,
  TermsContainer,
  AuthModalContainerLeftHeader,
  AuthModalContainerLeftHeaderTitle,
  AuthModalContainerFormContainer,
  AuthModalContainerForm,
  AuthModalFormLinks,
  AuthModalFormLinksLeft,
  AuthModalFormMiddle,
  AuthModalFormLinksRight,
  CheckboxContainer,
  Checkbox,
  ORContainer,
  OR,
} from "./styles/AuthModal";
import {
  CloseOutlined,
  CheckOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { ModalContainer } from "./styles/Container";
import AuthInputs from "../components/Inputs/AuthInputs";
import { Link } from "react-router-dom";
import Primary from "../components/Buttons/Primary";
import { loginInputs, registerInputs } from "./AuthForm";

const AuthModal = ({ toggleModal }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const [isLogin, setisLogin] = useState(false);

  const toggleIsLogin = () => {
    setisLogin((prev) => !prev);
  };
  return (
    <ModalContainer>
      <AuthModalContainer>
        {/* LEFT */}
        <AuthModalContainerLeft>
          <div>
            <AuthModalContainerLeftHeader>
              <AuthModalContainerLeftHeaderTitle>
                <span>{isLogin ? `Sign in` : "Create your account"}</span>
              </AuthModalContainerLeftHeaderTitle>
              <AuthButton onClick={() => toggleIsLogin()}>
                {isLogin ? `Register` : `Login`}
              </AuthButton>
            </AuthModalContainerLeftHeader>
          </div>
          {/* FORM  */}
          <AuthModalContainerForm>
            {isLogin
              ? loginInputs.map((input) => (
                  <AuthInputs title={input.label} key={input.id} />
                ))
              : registerInputs.map((input) => (
                  <AuthInputs title={input.label} key={input.id} />
                ))}

            <AuthModalFormLinks>
              {isLogin && (
                <AuthModalFormLinksLeft>
                  <CheckboxContainer>
                    <Checkbox onClick={() => toggleChecked()} checked={checked}>
                      {checked && <CheckOutlined style={{ color: "white" }} />}
                    </Checkbox>
                    <span>Stay signed in</span>
                  </CheckboxContainer>
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

            <Primary
              icon={<MailOutlined />}
              title={isLogin ? "Login with email" : "Register using email"}
              color={"black"}
            />

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
            <Primary
              icon={<GoogleOutlined style={{ color: "red" }} />}
              title={isLogin ? "Continue with Google" : "Signup using Google"}
            />
            <TermsContainer>
              <p>
                By clicking Sign in or Continue with Google, Facebook, or Apple,
                you agree to Etsy's Terms of Use and Privacy Policy. Etsy may
                send you communications; you may change your preferences in your
                account settings. We'll never post without your permission.
              </p>
            </TermsContainer>
          </AuthModalContainerForm>
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
    </ModalContainer>
  );
};

export default AuthModal;
