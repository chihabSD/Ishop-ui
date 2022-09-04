import React from "react";
import styled from "styled-components";

const FormActionButton = ({ title , error,  onClick,  style, disabled }) => {
  return (
    <Container
    
    
    onClick={onClick}
    error={error}


    style={{...style}}>
      <p>{title}</p>
    </Container>
  );
};

export default FormActionButton;
const Container = styled.div`
  background-color: ${({ error }) => (error ? "grey" : "#111")};
  pointer-events: ${({ error }) => (error ? "none" : "auto")};
  cursor: ${({ error }) => (error ? "none" : "pointer")};
  opacity: ${({ error }) => (error ? "0.1" : "1")};
  border: 2px solid;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all  0.3s;
    /* background-color: #111; */
    color: white;
  /* cursor: pointer; */
  p {
    font-size: 17px;
    font-weight: 700;
  }
  &:hover {
    /* background-color: #f1f1f1; */
    border-color: #d1d1d1;
    /* color: black; */
    color: ${({ error }) => (error ? "black" : "white")};
  }
`;
