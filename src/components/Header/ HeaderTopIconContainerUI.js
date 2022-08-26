import React from "react";
import styled from "styled-components";
import { HeaderTopIconContainer } from "./Style";
// const  HeaderTopIconContainerUI = ({icon}) => {
//   return (
//     <div> {icon} </div>
//   )
// }

const HeaderTopIconContainerUI = ({
  icon,
  children,
  isDown,
  onClick,
  lockPointer,
}) => {
  return (
    <Container onClick={onClick}>
      {/* <span>{icon}</span> */}
      {children}
    </Container>
  );
};

export default HeaderTopIconContainerUI;
const Container = styled.div`
  background-color: white;

  /* justify-content: space-around; */

  /* align-items: center; */

  /* grid-area: menusContainer; */
  margin: 5px;
  position: relative;

  padding: 10px;
  /* overflow: auto; */
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  /* pointer-events: none; */
  cursor: pointer;

  h3 {
    font-size: 30px;
  }
  &:hover #tooltip {
    /* background-color: blue; */
    /* display: none; */
    visibility: visible;
  }

  &:hover {
    background-color: #f1f1f1;
    /* background-color: blue; */
  }
`;
