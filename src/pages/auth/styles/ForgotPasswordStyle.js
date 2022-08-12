import styled from "styled-components";


export const ForgotPasswordFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
 
  min-height: 60vh;
  padding: 30px;
`;

export const ForgotPasswordFormContainerInner = styled.div`
  width: 45vw;


  border: 1px solid #d3d3d3;
  border-radius: 1px;
  margin-top: 20px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
export const ForgotPasswordFormTop = styled.div`
  /* background-color:red */

  padding: 25px 20px;
  border-bottom: 1px solid #f9f9f9;
  color: white;
background-color: #d3d3d3;
  span {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

export const ForgotPasswordFormForm = styled.div`
  background-color: white;

  z-index: -1;
  /* height: 200px */
  padding: 20px 0px;
`;

export const ForgotPasswordFormFormForm = styled.form`
  padding: 20px;
  z-index: -1;
`;
