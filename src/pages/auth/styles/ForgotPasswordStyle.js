import { Link } from "react-router-dom";
import styled from "styled-components";
export const ForgotPasswordFormContainer = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* height: 550px; */
  /* background-color: green; */
  background-color: #f5f5f0;
  /* height: 100vh; */
  /* height: auto; */
  min-height: 60vh;
  padding: 30px;
`;

export const ForgotPasswordFormContainerInner = styled.div`
  width: 45vw;

  /* border: 1px solid grey; */
  border-radius: 1px;
  margin-top: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
export const ForgotPasswordFormTop = styled.div`
  /* background-color:red */

  padding: 25px 20px;

  span {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

export const ForgotPasswordFormForm = styled.div`
  background-color: white;

  /* height: 200px */
  padding: 20px 0px;
`;

export const ForgotPasswordFormFormForm = styled.form`
  padding: 20px;
`;
