import React from "react";
import styled from "styled-components";
export const handleClick = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    console.log("clicked outside");
  }
};

const OverLayContainer = ({ children, style }) => {
  return <Container style={{...style}} onClick={(e) => handleClick(e)}>{children}</Container>;
};

export default OverLayContainer;
const Container = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  position: absolute;
  z-index: 1000;
  display: flex;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  background-color: rgba(0, 0, 0, 0.5);

  align-items: center;
`;
