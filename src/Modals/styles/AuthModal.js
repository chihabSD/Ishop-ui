import { Link } from "react-router-dom";
import styled from "styled-components";
export const AuthModalContainer = styled.div`
  width: 500px;
  height: 90%;
  display: flex;
  border: none;
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
  span {
    font-size: 1.2rem;
  }
`;
export const AuthButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  /* border: 2px solid black; */
  border: 0.5px solid lightgray;
  padding: 5px 30px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`;



export const AuthModalContainerForm = styled.form`
  margin-top: 10px;
  
  width: 100%;
  position: relative;
  /* background-color: aliceblue; */
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

export const CheckboxContainer = styled.div`
  /* margin-top: 10px; */
display: flex;
align-items: center;
`;

export const Checkbox = styled.div`
  /* margin-top: 10px; */
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0.5px solid lightgray;

  display: flex;
  justify-content: center;
  align-items: center;
cursor: pointer;
`;
export const AuthModalFormLinksLeft = styled.div`
  /* margin-top: 10px; */
`;

export const AuthModalFormLinksRight = styled.div`
  margin-top: 10px;
  span{
    text-decoration: underline;
    color: grey;
  }
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
  span{
    text-decoration: underline;
    color: grey;
  }
`;

// OR
export const ORContainer = styled.div`
  display: flex;
  /* background-color: blue; */
  align-items: center;
`;
export const OR = styled.div`
 display:flex;
  justify-content:center;
  align-items: center;

  span {
    margin: 0  10px;
  }

  &::after,
&::before {
    content: "";
    display: block;
    background: lightgray;
    width: 100%;
    height:1px;
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
  background-color: rgba(0,0,0,0.5);
  opacity: 0.3;
  }
`;
