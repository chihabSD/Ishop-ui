import { Link } from "react-router-dom";
import styled from "styled-components";
export const AuthModalContainer = styled.div`
  width: 470px;
  /* height: 80%; */
  min-height: 80%;
  display: flex;
  border: none;
  z-index: 1;
  /* background: white; */
`;
// LEFT
export const AuthModalContainerLeft = styled.div`
  background-color: white;
  border-radius: 25px;

  width: 80%;
  margin-right: 15px;
`;
export const AuthModalContainerLeftHeader = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const AuthModalContainerLeftHeaderTitle = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  /* line-height: 18px; */
  span {
    font-size: 1rem;
  }
`;


export const AuthModalContainerForm = styled.form`
  margin-top: 10px;

  width: 100%;
  position: relative;
`;
export const TermsContainer = styled.form`
  /* margin-top: 10px; */
  line-height: 18px;
  padding-top: 20px;
  /* background-color: aliceblue; */
  /* padding: 20px; */
  width: 80%;
  margin-top: 20px;
  align-self: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aliceblue; */
  p {
    display: flex;
    align-self: center;
    font-size: 0.9rem;
  }
`;

export const AuthModalFormLinks = styled.div`
  padding: 20px;
  /* background-color: blue; */
  margin: 20px;
  display: flex;
  padding: 10px 1px;
  justify-items: center;
  justify-content: space-between;
`;



export const AuthModalFormLinksLeft = styled.div`
  /* margin-top: 10px; */
`;

// LOGIN BUTTON
export const LOGINBUTTON = styled.form`
  margin-top: 10px;
  background-color: #222;
  color: #fff;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
`;

// MIDDLE SECION

export const AuthModalFormMiddle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: yellow; */
  align-items: center;
  display: flex;
  justify-content: center;
  span {
    text-decoration: underline;
    color: grey;
  }
`;


export const OR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 10px;
  }

  &::after,
  &::before {
    content: "";
    display: block;
    background: lightgray;
    width: 100%;
    height: 1px;
    /* margin: 0 1px; */
  }
`;

// RIGHT SIDE
export const AuthModalContainerRight = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.3;
  }
`;
