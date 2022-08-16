import React from "react";
import styled from "styled-components";

const FormTitle = ({ title, isError }) => {
  return <div> {title && <Title isError={isError}>{title}</Title>}</div>;
};

export default FormTitle;
const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin: 1px 20px;
  padding-top: 10px;
  
  /* color: ${({ isError }) => (isError ? "red" : "#222")}; */
  color:  "#222"

`;
