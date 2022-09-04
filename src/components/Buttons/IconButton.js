import React from "react";
import styled from "styled-components";

const IconButton = ({ title, icon }) => {
  return (
    <Container>
      {icon}
      <div style={{ marginLeft: "10px" }} />
      <p>{title}</p>
    </Container>
  );
};

export default IconButton;
const Container = styled.div`
  border: 2px solid;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all  0.3s;
  cursor: pointer;
  p {
    font-size: 17px;
    font-weight: 700;
  }
  &:hover {
    background-color: #f1f1f1;
    border-color: #d1d1d1;
  }
`;
