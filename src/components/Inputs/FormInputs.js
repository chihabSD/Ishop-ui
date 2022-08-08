import React from "react";
import styled from "styled-components";
const FormInputs = ({ type,  register, name}) => {
  return (
    <Container>
     
      <input type={type} {...register(name)} />
    </Container>
  );
};

export default FormInputs;


export const Container = styled.div`
background-color: white;
  width: 70%;
  /* margin-top: 1px; */
  padding: 1px 20px;
  input {
    width: 100%;
    /* background-color: aliceblue; */
    outline: none;
    border: 1px solid lightgray;
    padding: 7px;
    border-radius: 7px;
  }
  input[type="text"] {
    padding: 10px;
    margin: 5px 0; // add top and bottom margin
  }
`;
